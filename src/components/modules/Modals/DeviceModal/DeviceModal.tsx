import cn from "classnames";
import React from "react";
import HyperModal from 'react-hyper-modal';
import { toast } from "react-toastify";

import styles from "./DeviceModal.module.css";
import { DeviceModalProps } from "./DeviceModal.props";

import { getId, error, success } from "@/utils";
import { IBrand, IDeviceInfo, IType } from "@/shared";
import { Button, FontAwesomeIcon, Input, Select, TrashIcon } from "@/components/UI";
import { useInput, useFile } from "@/hooks";
import { createDevice } from "@/api";

export const DeviceModal = ({ types, brands, ...props }: DeviceModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);

    const name = useInput('', { isEmpty: true, minLength: 1 })
    const description = useInput('', { isEmpty: true, minLength: 1 })
    const price = useInput('', { isEmpty: true, minLength: 1 })
    const discount = useInput('0', { isEmpty: true, minLength: 1 })
    // const type = useInput(types[0].name, { isEmpty: true })
    // const brand = useInput(brands[0].name, { isEmpty: true })
    const type = useInput('', { isEmpty: true })
    const brand = useInput('', { isEmpty: true })
    const file = useFile('', { isEmpty: true });

    const [info, setInfo] = React.useState<IDeviceInfo[]>([])

    let nameError = name.isDirty && name.isEmpty;
    let descriptionError = description.isDirty && description.isEmpty;
    let priceError = price.isDirty && price.isEmpty;
    let fileError = file.isDirty && file.isEmpty;
    let discountError = discount.isDirty && discount.isEmpty;

    let isDisabled = !name.inputValid || !description.inputValid || !price.inputValid || !discount.inputValid || !file.inputValid;

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', id: getId() }])
    }

    const removeInfo = (id: number) => {
        setInfo(info.filter(item => item.id !== id))
    }

    const changeInfo = (key: any, value: any, id: number) => {
        setInfo(info.map((i) => i.id === id ? { ...i, [key]: value } : i))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('imgUrl', file.value);
        formData.append('description', description.value);
        formData.append('name', name.value);
        formData.append('price', price.value);
        formData.append('discount', discount.value);
        formData.append('typeId', String(types.find((item: IType) => item.name === type.value)?.id))
        formData.append('brandId', String(brands.find((item: IBrand) => item.name === brand.value)?.id))
        formData.append('info', JSON.stringify(info));

        createDevice(formData)
            .then(() => {
                setIsOpen(false)
                toast.success('Вы добавили товар!', success);
                name.reset();
                description.reset();
                price.reset();
                discount.reset();
                // file.reset();
                setInfo([])
            })
            .catch(err => {
                console.warn(err)
                toast.error('Ошибка добавления товара', error);
            })
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Добавить устройство</button>
            <HyperModal requestClose={() => setIsOpen(false)} isOpen={isOpen}>
                <form onSubmit={handleSubmit}>
                    <h2>Выберите тип</h2>
                    <Select
                        items={types}
                        value={type.value}
                        onChange={(e: any) => type.onChange(e)}
                    />
                    <h2>Выберите бренд</h2>
                    <Select
                        items={brands}
                        value={brand.value}
                        onChange={(e: any) => brand.onChange(e)}
                    />
                    <h2>Выберите изображение</h2>
                    <div>
                        <input
                            className={cn(styles.input, fileError ? "errorIndicator" : null)}
                            onBlur={file.onBlur}
                            type="file"
                            onChange={(e: any) => file.onChange(e)}
                        />
                    </div>
                    <h2>Введите название товара</h2>
                    <Input
                        className={cn(styles.input, nameError ? "errorIndicator" : null)}
                        placeholder="Введите название товара"
                        onBlur={name.onBlur}
                        type="text"
                        value={name.value}
                        onChange={(e: any) => name.onChange(e)}
                    />
                    <h2>Введите описание товара</h2>
                    <Input
                        className={cn(styles.input, descriptionError ? "errorIndicator" : null)}
                        placeholder="Введите описание товара"
                        onBlur={description.onBlur}
                        type="text"
                        value={description.value}
                        onChange={(e: any) => description.onChange(e)}
                    />
                    <h2>Введите цену товара</h2>
                    <Input
                        className={cn(styles.input, priceError ? "errorIndicator" : null)}
                        placeholder="Введите цену товара"
                        onBlur={price.onBlur}
                        type="number"
                        value={price.value}
                        onChange={(e: any) => price.onChange(e)}
                    />
                    <h2>Введите скидку на товар</h2>
                    <Input
                        className={cn(styles.input, discountError ? "errorIndicator" : null)}
                        placeholder="Введите скидку на товар"
                        onBlur={discount.onBlur}
                        type="number"
                        value={discount.value}
                        onChange={(e: any) => discount.onChange(e)}
                    />
                    <Button
                        className={styles.btn}
                        color="red"
                        size="medium"
                        onClick={() => addInfo()}
                    >
                        Добавить новое свойство
                    </Button>
                    {
                        info.map((item) => (
                            <div className={styles.properties} key={item.id}>
                                <input type="text" value={item.title} onChange={(e: any) => changeInfo('title', e.target.value, item.id)} placeholder="Введите название свойства" />
                                <input type="text" value={item.description} onChange={(e: any) => changeInfo('description', e.target.value, item.id)} placeholder="Введите описание свойства" />
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