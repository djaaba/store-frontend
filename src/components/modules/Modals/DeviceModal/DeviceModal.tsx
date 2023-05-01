import cn from "classnames";
import React from "react";
import { toast } from "react-toastify";

import styles from "../Modal.module.css";
import { DeviceModalProps } from "./DeviceModal.props";

import { getId, error, success } from "@/utils";
import { IBrand, IDeviceInfo, IType } from "@/shared";
import { Button, FontAwesomeIcon, Htag, Input, Select, TrashIcon } from "@/components/UI";
import { useInput, useFile } from "@/hooks";
import { createDevice } from "@/api";

export const DeviceModal = ({ device, types, brands, ...props }: DeviceModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);

    const brandName = brands.filter(brand => brand.id == device?.brandId)[0]?.name;
    const typeName = types.filter(type => type.id == device?.typeId)[0]?.name;

    const name = useInput(device?.name || '', { isEmpty: true, minLength: 1 })
    const description = useInput(device?.description || '', { isEmpty: true, minLength: 1 })
    const price = useInput(device?.price || '', { isEmpty: true, minLength: 1 })
    const discount = useInput(device?.discount || '0', { isEmpty: true, minLength: 1 })
    const type = useInput(typeName || '', { isEmpty: true })
    const brand = useInput(brandName || '', { isEmpty: true })
    const file = useFile('', { isEmpty: true });

    const [info, setInfo] = React.useState<IDeviceInfo[]>([])

    let nameError = name.isDirty && name.isEmpty;
    let descriptionError = description.isDirty && description.isEmpty;
    let priceError = price.isDirty && price.isEmpty;
    let fileError = file.isDirty && file.isEmpty;
    let discountError = discount.isDirty && discount.isEmpty;

    let isDisabled = !name.inputValid || !description.inputValid || !price.inputValid || !discount.inputValid || !file.inputValid;

    // let valids = !name.inputValid || !phone.inputValid || !address.inputValid || !email.inputValid;
    // let isDisabled = storeInfo.name? valids : !file.inputValid || valids;

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
                file.reset();
                setInfo([])
            })
            .catch(err => {
                toast.error('Ошибка добавления товара', error);
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={styles.container}>
                    <div>
                        <Htag tag="h3">Изображение товара</Htag>
                        <input
                            className={fileError ? "errorIndicator" : ''}
                            onBlur={file.onBlur}
                            type="file"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => file.onChange(e)}
                        />
                    </div>
                    <div>
                        <Htag tag="h3">Тип товара</Htag>
                        <Select
                            items={types}
                            value={type.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => type.onChange(e)}
                        />
                    </div>
                    <div>
                        <Htag tag="h3">Бренда товара</Htag>
                        <Select
                            items={brands}
                            value={brand.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => brand.onChange(e)}
                        />
                    </div>
                    <div>
                        <Htag tag="h3">Название товара</Htag>
                        <Input
                            className={nameError ? "errorIndicator" : ''}
                            placeholder="Введите название товара"
                            onBlur={name.onBlur}
                            type="text"
                            value={name.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                        />
                    </div>
                    <div>
                        <Htag tag="h3">Описание товара</Htag>
                        <Input
                            className={descriptionError ? "errorIndicator" : ''}
                            placeholder="Введите описание товара"
                            onBlur={description.onBlur}
                            type="text"
                            value={description.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => description.onChange(e)}
                        />
                    </div>
                    <div>
                        <Htag tag="h3">Цена товара</Htag>
                        <Input
                            className={priceError ? "errorIndicator" : ''}
                            placeholder="Введите цену товара"
                            onBlur={price.onBlur}
                            type="number"
                            value={price.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => price.onChange(e)}
                        />
                    </div>
                    <div>
                        <Htag tag="h3">Скидка на товар</Htag>
                        <Input
                            className={discountError ? "errorIndicator" : ''}
                            placeholder="Введите скидку на товар"
                            onBlur={discount.onBlur}
                            type="number"
                            value={discount.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => discount.onChange(e)}
                        />
                    </div>
                    <Button
                        // className={styles.btn}
                        color="red"
                        size="medium"
                        onClick={(e: React.FormEvent) => addInfo(e)}
                    >
                        Добавить новое свойство
                    </Button>
                    <div>
                        {
                            info.map((item) => (
                                <div className={styles.property} key={item.id}>
                                    <input className={styles.input} type="text" value={item.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInfo('title', e.target.value, item.id)} placeholder="Введите название свойства" />
                                    <div className={styles.inputs}>
                                        <input type="text" className={styles.input} value={item.description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInfo('description', e.target.value, item.id)} placeholder="Введите описание свойства" />
                                        <Button
                                            onClick={() => removeInfo(item.id)}
                                            className={styles.btn}
                                            size="small"
                                            color="dark"
                                        >
                                            <FontAwesomeIcon
                                                icon={TrashIcon}
                                            />
                                        </Button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.operations}>
                    <Button
                        disabled={isDisabled}
                        type="submit"
                        color={isDisabled ? "gray" : "red"}
                        size="big"
                        onClick={(e: React.FormEvent) => handleSubmit(e)}
                    >
                        Добавить устройство
                    </Button>
                    <Button
                        color="red"
                        size="big"
                        onClick={() => setIsOpen(false)}
                    >
                        Закрыть
                    </Button>
                </div>
            </form>
        </>
    );
};