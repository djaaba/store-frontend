import cn from "classnames";
import React from "react";
import { toast } from "react-toastify";

import styles from "../Modal.module.css";
import { TypeModalProps } from "./TypeModal.props";

import { useFile, useInput } from "@/hooks";
import { Button, FontAwesomeIcon, Htag, Input, TrashIcon } from "@/components/UI";
import { createType, deleteType, updateType } from "@/api";
import { error, success } from "@/utils";

export const TypeModal = ({ type, setOpen, ...props }: TypeModalProps): JSX.Element => {
    const name = useInput(type.name, { isEmpty: true, minLength: 1 })
    const file = useFile('', { isEmpty: true });

    let nameError = name.isDirty && name.isEmpty;
    let fileError = file.isDirty && file.isEmpty;
    let isDisabled = type.name ? !name.inputValid : !name.inputValid || !file.inputValid;

    React.useEffect(() => {
        name.setNewValue(type.name)
    }, [type.name])


    const reset = () => {
        name.reset();
        file.reset();
    }

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('imgUrl', file.value);
        formData.append('name', name.value);
        formData.append('id', `${type.id}`);

        updateType(formData)
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

        deleteType(type.id)
            .then(() => {
                toast.success('Вы удалили тип!', success);
                reset();
            })
            .catch(err => {
                toast.error('Ошибка удаления типа', error);
            })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('imgUrl', file.value);
        formData.append('name', name.value);

        createType(formData)
            .then(() => {
                toast.success('Вы добавили тип!', success);
                reset();
            })
            .catch(err => {
                toast.error('Ошибка добавления типа', error);
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={styles.container}>
                    <div>
                        <Htag tag="h3">Выберите изображение типа</Htag>
                        <input
                            className={cn(styles.input, fileError ? "errorIndicator" : null)}
                            onBlur={file.onBlur}
                            type="file"
                            ref={file.ref}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => file.onChange(e)}
                        />
                    </div>
                    <div>
                        <Htag tag="h3">Введите название типа</Htag>
                        <Input
                            className={cn(styles.input, nameError ? "errorIndicator" : null)}
                            placeholder="Введите название типа"
                            onBlur={name.onBlur}
                            type="name"
                            value={name.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                        />
                    </div>
                </div>
                {
                    type.name ?
                        <div className={styles.operations}>
                            <Button
                                disabled={isDisabled}
                                type="submit"
                                className={styles.btn}
                                color={isDisabled ? "gray" : "red"}
                                size="big"
                                onClick={(e: React.FormEvent) => handleUpdate(e)}
                            >
                                Внести изменения
                            </Button>
                            <Button
                                className={styles.btn}
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
                                Добавить тип
                            </Button>
                        </>
                }
            </form>
        </>
    );
};
