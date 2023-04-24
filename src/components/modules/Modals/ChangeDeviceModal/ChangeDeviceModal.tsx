import cn from "classnames";
import React from "react";
import HyperModal from 'react-hyper-modal';
import { toast } from "react-toastify";

import styles from "./ChangeDeviceModal.module.css";
import { ChangeDeviceModalProps } from "./ChangeDeviceModal.props";

import { getId, error, success } from "@/utils";
import { IBrand, IDevice, IDeviceInfo, IType } from "@/shared";
import { Button, FontAwesomeIcon, Input, RewriteIcon, Select, TrashIcon } from "@/components/UI";
import { useInput, useFile } from "@/hooks";
import { updateDevice } from "@/api";

export const ChangeDeviceModal = ({ data, types, brands, setDevice, ...props }: ChangeDeviceModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);

    const brandName = brands.filter(brand => brand.id == data.brandId)[0].name;
    const typeName = types.filter(type => type.id == data.typeId)[0].name;

    const name = useInput(data.name || '', { isEmpty: true, minLength: 1 })
    const description = useInput(data.description || '', { isEmpty: true, minLength: 1 })
    const price = useInput(data.price || '', { isEmpty: true, minLength: 1 })
    const discount = useInput(data.discount || '0', { isEmpty: true, minLength: 1 })
    const brand = useInput(brandName || '', { isEmpty: true })
    const type = useInput(typeName || '', { isEmpty: true })
    const file = useFile('', { isEmpty: true });

    const [info, setInfo] = React.useState<IDeviceInfo[]>(data.info)

    let nameError = name.isDirty && name.isEmpty;
    let descriptionError = description.isDirty && description.isEmpty;
    let priceError = price.isDirty && price.isEmpty;
    let fileError = file.isDirty && file.isEmpty;
    let discountError = discount.isDirty && discount.isEmpty;

    let isDisabled = !name.inputValid || !description.inputValid || !price.inputValid || !discount.inputValid || !file.inputValid;

    const addInfo = (e: React.FormEvent) => {
        e.preventDefault();
        setInfo([...info, { title: '', description: '', id: getId() }])
    }

    const removeInfo = (id: number) => {
        setInfo(info.filter(item => item.id !== id))
    }

    const changeInfo = (key: string, value: string, id: number) => {
        setInfo(info.map((i) => i.id === id ? { ...i, [key]: value } : i))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', `${data.id}`);
        formData.append('imgUrl', file.value);
        formData.append('description', description.value);
        formData.append('name', name.value);
        formData.append('price', price.value);
        formData.append('discount', discount.value);
        formData.append('typeId', String(types.find((item: IType) => item.name === type.value)?.id))
        formData.append('brandId', String(brands.find((item: IBrand) => item.name === brand.value)?.id))
        formData.append('info', JSON.stringify(info));

        updateDevice(formData)
            .then((dev) => {
                setIsOpen(false)
                toast.success('Вы изменили информацию!', success);
                setDevice(dev)
            })
            .catch(err => {
                toast.error('Ошибка изменения товара', error);
            })
    }

    return (
        <>
            <Button onClick={() => setIsOpen(true)} className={props.className} size="big" color="red">
                <FontAwesomeIcon icon={RewriteIcon} />
            </Button>
            <HyperModal requestClose={() => setIsOpen(false)} isOpen={isOpen}>
                <form onSubmit={handleSubmit}>
                    <h2>Выберите тип</h2>
                    <Select
                        items={types}
                        value={type.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => type.onChange(e)}
                    />
                    <h2>Выберите бренд</h2>
                    <Select
                        items={brands}
                        value={brand.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => brand.onChange(e)}
                    />
                    <h2>Выберите изображение</h2>
                    <div>
                        <input
                            className={cn(styles.input, fileError ? "errorIndicator" : null)}
                            onBlur={file.onBlur}
                            type="file"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => file.onChange(e)}
                        />
                    </div>
                    <h2>Введите название товара</h2>
                    <Input
                        className={cn(styles.input, nameError ? "errorIndicator" : null)}
                        placeholder="Введите название товара"
                        onBlur={name.onBlur}
                        type="text"
                        value={name.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                    />
                    <h2>Введите описание товара</h2>
                    <Input
                        className={cn(styles.input, descriptionError ? "errorIndicator" : null)}
                        placeholder="Введите описание товара"
                        onBlur={description.onBlur}
                        type="text"
                        value={description.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => description.onChange(e)}
                    />
                    <h2>Введите цену товара</h2>
                    <Input
                        className={cn(styles.input, priceError ? "errorIndicator" : null)}
                        placeholder="Введите цену товара"
                        onBlur={price.onBlur}
                        type="number"
                        value={price.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => price.onChange(e)}
                    />
                    <h2>Введите скидку на товар</h2>
                    <Input
                        className={cn(styles.input, discountError ? "errorIndicator" : null)}
                        placeholder="Введите скидку на товар"
                        onBlur={discount.onBlur}
                        type="number"
                        value={discount.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => discount.onChange(e)}
                    />
                    <Button
                        className={styles.btn}
                        color="red"
                        size="medium"
                        onClick={(e: React.FormEvent) => addInfo(e)}
                    >
                        Добавить новое свойство
                    </Button>
                    {
                        info.map((item) => (
                            <div className={styles.properties} key={item.id}>
                                <input type="text" value={item.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInfo('title', e.target.value, item.id)} placeholder="Введите название свойства" />
                                <input type="text" value={item.description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInfo('description', e.target.value, item.id)} placeholder="Введите описание свойства" />
                                <Button onClick={() => removeInfo(item.id)} className={styles.btn} size="small" color="dark">
                                    <FontAwesomeIcon
                                        icon={TrashIcon}
                                    />
                                </Button>
                            </div>
                        ))
                    }
                    <div>
                        <Button
                            disabled={isDisabled}
                            type="submit"
                            className={styles.btn}
                            color={isDisabled ? "gray" : "red"}
                            size="big"
                            onClick={(e: React.FormEvent) => handleSubmit(e)}
                        >
                            Добавить устройство
                        </Button>
                        <Button
                            className={styles.btn}
                            color="red"
                            size="medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Закрыть
                        </Button>
                    </div>
                </form>
            </HyperModal>
        </>
    );
};