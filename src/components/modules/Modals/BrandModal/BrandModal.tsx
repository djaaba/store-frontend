import cn from "classnames";
import React from "react";
import { toast } from "react-toastify";

import styles from "../Modal.module.css";
import { BrandModalProps } from "./BrandModal.props";

import { createBrand, deleteBrand, updateBrand } from "@/api";
import { Button, FontAwesomeIcon, Htag, Input, TrashIcon } from "@/components/UI";
import { useFile, useInput } from "@/hooks";
import { error, success } from "@/utils";

export const BrandModal = ({ brand, setOpen, ...props }: BrandModalProps): JSX.Element => {
    const name = useInput(brand.name, { isEmpty: true, minLength: 1 })
    const file = useFile('', { isEmpty: true });

    React.useEffect(() => {
        name.setNewValue(brand.name)
    }, [brand.name])

    const reset = () => {
        name.reset();
        file.reset();
    }

    let nameError = name.isDirty && name.isEmpty;
    let fileError = file.isDirty && file.isEmpty;

    let isDisabled = brand.name ? !name.inputValid : !name.inputValid || !file.inputValid;


    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('imgUrl', file.value);
        formData.append('name', name.value);
        formData.append('id', `${brand.id}`);

        updateBrand(formData)
            .then(() => {
                toast.success('Вы внесли изменения!', success);
                reset();
            })
            .catch(err => {
                toast.error('Ошибка изменения данных', error);
            })
    }

    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault();

        deleteBrand(brand.id)
            .then(() => {
                toast.success('Вы удалили бренд!', success);
                reset();
            })
            .catch(err => {
                toast.error('Ошибка удаления бренда', error);
            })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('imgUrl', file.value);
        formData.append('name', name.value);
        formData.append('id', `${brand.id}`);

        createBrand(formData)
            .then(() => {
                setOpen('')
                toast.success('Вы добавили бренд!', success);
                name.reset();
                file.reset();
            })
            .catch(err => {
                toast.error('Ошибка добавления бренда', error);
            })
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <Htag className={styles.title} tag="h1">
                    {
                        brand.name ? "Изменение бренда" : "Добавление бренда"
                    }
                </Htag>
                <div className={styles.container}>
                    <div>
                        <Htag tag="h3">Выберите изображение бренда</Htag>
                        <input
                            className={cn(styles.input, fileError ? "errorIndicator" : null)}
                            onBlur={file.onBlur}
                            type="file"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => file.onChange(e)}
                        />
                    </div>
                    <div>
                        <Htag tag="h3">Введите название бренда</Htag>
                        <Input
                            className={cn(styles.input, nameError ? "errorIndicator" : null)}
                            placeholder="Введите название бренда"
                            onBlur={name.onBlur}
                            type="text"
                            value={name.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                        />
                    </div>
                </div>
                {
                    brand.name ?
                        <div className={styles.operations}>
                            <Button
                                disabled={isDisabled}
                                type="submit"
                                color={isDisabled ? "gray" : "red"}
                                size="big"
                                onClick={(e: React.FormEvent) => handleUpdate(e)}
                            >
                                Внести изменения
                            </Button>
                            <Button
                                color="red"
                                size="big"
                                onClick={(e: React.FormEvent) => handleDelete(e)}
                            >
                                <FontAwesomeIcon
                                    icon={TrashIcon}
                                />
                            </Button>
                        </div>
                        :
                        <>
                            <Button
                                disabled={isDisabled}
                                type="submit"
                                color={isDisabled ? "gray" : "red"}
                                size="big"
                                onClick={(e: React.FormEvent) => handleSubmit(e)}
                            >
                                Добавить бренд
                            </Button>
                        </>
                }
            </form>
        </>
    );
};
