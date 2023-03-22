import { createBrand } from "@/api";
import { Button, Input } from "@/components/UI";
import { useFile, useInput } from "@/hooks";
import { error, success } from "@/utils";
import cn from "classnames";
import React from "react";
import HyperModal from 'react-hyper-modal';
import { toast } from "react-toastify";

import styles from "./BrandModal.module.css";
import { BrandModalProps } from "./BrandModal.props";

export const BrandModal = ({ ...props }: BrandModalProps): JSX.Element => {
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

        createBrand(formData)
            .then(() => {
                setIsOpen(false)
                toast.success('Вы добавили бренд!', success);
                name.reset();
            })
            .catch(err => {
                console.warn(err)
                toast.error('Ошибка добавления бренда', error);
            })
    }


    return (
        <>
            <button onClick={() => setIsOpen(true)}>Добавить бренд</button>
            <HyperModal requestClose={() => setIsOpen(false)} isOpen={isOpen}>
                <form onSubmit={handleSubmit}>
                    <h2>Введите название бренда</h2>
                    <Input
                        className={cn(styles.input, nameError ? "errorIndicator" : null)}
                        placeholder="Введите название бренда"
                        onBlur={name.onBlur}
                        type="text"
                        value={name.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                    />
                    <h2>Выберите изображение</h2>
                    <input
                        className={cn(styles.input, fileError ? "errorIndicator" : null)}
                        onBlur={file.onBlur}
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => file.onChange(e)}
                    />
                    <Button
                        disabled={isDisabled}
                        type="submit"
                        className={styles.btn}
                        color={isDisabled ? "gray" : "red"}
                        size="big"
                        onClick={(e: React.FormEvent) => handleSubmit(e)}
                    >
                        Добавить бренд
                    </Button>
                </form>
            </HyperModal>
        </>
    );
};
