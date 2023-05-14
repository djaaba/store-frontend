import cn from "classnames";
import React from "react";
import { toast } from "react-toastify";

import styles from "../Modal.module.css";
import { BannerModalProps } from "./BannerModal.props";

import { useFile, useInput } from "@/hooks";
import { Button, FontAwesomeIcon, Htag, Input, TrashIcon } from "@/components/UI";
import { createBanner, deleteBrand, updateBanner } from "@/api";
import { error, success } from "@/utils";

export const BannerModal = ({ banner, setOpen, ...props }: BannerModalProps): JSX.Element => {
    const name = useInput(banner.name, { isEmpty: true, minLength: 1 })
    const file = useFile('', { isEmpty: true });

    let nameError = name.isDirty && name.isEmpty;
    let fileError = file.isDirty && file.isEmpty;

    let isDisabled = banner.name ? !name.inputValid : !name.inputValid || !file.inputValid;

    React.useEffect(() => {
        name.setNewValue(banner.name)
    }, [banner.name])

    const reset = () => {
        name.reset();
        file.reset();
        setOpen('')
    }

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('imgUrl', file.value);
        formData.append('name', name.value);
        formData.append('id', `${banner.id}`);

        updateBanner(formData)
            .then(() => {
                toast.success('Вы внесли изменения!', success);
                reset();
            })
            .catch(err => {
                toast.error('Ошибка изменения данных', error);
            })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('imgUrl', file.value);
        formData.append('name', name.value);

        createBanner(formData)
            .then(() => {
                toast.success('Вы добавили баннер!', success);
                reset();
            })
            .catch(err => {
                toast.error('Ошибка добавления баннера', error);
            })
    }

    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault();

        deleteBrand(banner.id)
            .then(() => {
                toast.success('Вы удалили бренд!', success);
                reset();
            })
            .catch(err => {
                toast.error('Ошибка удаления бренда', error);
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={styles.container}>
                    <div>
                        <Htag tag="h3">Введите название баннера</Htag>
                        <Input
                            className={cn(styles.input, nameError ? "errorIndicator" : null)}
                            placeholder="Введите название баннера"
                            onBlur={name.onBlur}
                            type="name"
                            value={name.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                        />
                    </div>
                    <div>
                        <Htag tag="h3">Выберите изображение баннера</Htag>
                        <input
                            className={cn(styles.input, fileError ? "errorIndicator" : null)}
                            onBlur={file.onBlur}
                            type="file"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => file.onChange(e)}
                        />
                    </div>
                </div>
                {
                    banner.name ?
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
                                className={styles.btn}
                                color={isDisabled ? "gray" : "red"}
                                size="big"
                                onClick={(e: React.FormEvent) => handleSubmit(e)}
                            >
                                Добавить баннер
                            </Button>
                        </>
                }
            </form>
        </>
    );
};
