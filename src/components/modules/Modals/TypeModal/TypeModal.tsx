import cn from "classnames";
import React from "react";
import HyperModal from 'react-hyper-modal';
import { toast } from "react-toastify";

import styles from "./TypeModal.module.css";
import { TypeModalProps } from "./TypeModal.props";

import { useFile, useInput } from "@/hooks";
import { Button, Input } from "@/components/UI";
import { createType } from "@/api";
import { error, success } from "@/utils";

export const TypeModal = ({ ...props }: TypeModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);

    const name = useInput('', { isEmpty: true, minLength: 1 })
    const file = useFile('', { isEmpty: true });

    let nameError = name.isDirty && name.isEmpty;
    let fileError = file.isDirty && file.isEmpty;

    let isDisabled = !name.inputValid || !file.inputValid;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('imgUrl', file.value);
        formData.append('name', name.value);

        createType(formData)
            .then(() => {
                setIsOpen(false)
                toast.success('Вы добавили тип!', success);
                name.reset();
            })
            .catch(err => {
                toast.error('Ошибка добавления типа', error);
            })
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Добавить тип</button>
            <HyperModal requestClose={() => setIsOpen(false)} isOpen={isOpen}>
                <form onSubmit={handleSubmit}>
                    <h2>Выберите изображение</h2>
                    <input
                        className={cn(styles.input, fileError ? "errorIndicator" : null)}
                        onBlur={file.onBlur}
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => file.onChange(e)}
                    />
                    <Input
                        className={cn(styles.input, nameError ? "errorIndicator" : null)}
                        placeholder="Введите название типа"
                        onBlur={name.onBlur}
                        type="name"
                        value={name.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                    />
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
                </form>
            </HyperModal>
        </>
    );
};
