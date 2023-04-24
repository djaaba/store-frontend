import cn from "classnames";
import React from "react";
import HyperModal from 'react-hyper-modal';

import styles from "./BannerModal.module.css";
import { BannerModalProps } from "./BannerModal.props";

import { useFile, useInput } from "@/hooks";
import { Button, Input } from "@/components/UI";
import { createBanner } from "@/api";
import { toast } from "react-toastify";
import { error, success } from "@/utils";

export const BannerModal = ({ ...props }: BannerModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);

    const name = useInput('', { isEmpty: true, minLength: 1 })
    const link = useInput('', { isEmpty: true, minLength: 1 })
    const file = useFile('', { isEmpty: true });

    let nameError = name.isDirty && name.isEmpty;
    let fileError = file.isDirty && file.isEmpty;
    let linkError = link.isDirty && link.isEmpty;

    let isDisabled = !name.inputValid || !file.inputValid;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('imgUrl', file.value);
        formData.append('linkUrl', link.value);
        formData.append('name', name.value);

        createBanner(formData)
            .then(() => {
                setIsOpen(false)
                toast.success('Вы добавили тип!', success);
                name.reset();
                link.reset();
            })
            .catch(err => {
                toast.error('Ошибка добавления типа', error);
            })
    }

    return (
        <>
            <Button color="red" size="big" onClick={() => setIsOpen(true)}>Добавить баннер</Button>
            <HyperModal requestClose={() => setIsOpen(false)} isOpen={isOpen}>
                <form onSubmit={handleSubmit}>
                    <Input
                        className={cn(styles.input, nameError ? "errorIndicator" : null)}
                        placeholder="Введите название баннера"
                        onBlur={name.onBlur}
                        type="name"
                        value={name.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                    />
                    <Input
                        className={cn(styles.input, linkError ? "errorIndicator" : null)}
                        placeholder="Введите ссылку для баннера"
                        onBlur={link.onBlur}
                        type="name"
                        value={link.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => link.onChange(e)}
                    />
                    <h2>Выберите изображение баннера</h2>
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
                        Добавить баннер
                    </Button>
                </form>
            </HyperModal>
        </>
    );
};
