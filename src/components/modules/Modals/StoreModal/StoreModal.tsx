import cn from "classnames";
import React from "react";
import HyperModal from 'react-hyper-modal';
import { toast } from "react-toastify";

import styles from "./StoreModal.module.css";
import { StoreModalProps } from "./StoreModal.props";

import { useFile, useInput } from "@/hooks";
import { Button, Input } from "@/components/UI";
import { updateStore } from "@/api";
import { error, success } from "@/utils";

export const StoreModal = ({ storeInfo, ...props }: StoreModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);

    const name = useInput(storeInfo?.name || '', { isEmpty: true, minLength: 1 })
    const phone = useInput(storeInfo?.phone || '', { isEmpty: true, minLength: 1 })
    const address = useInput(storeInfo?.address || '', { isEmpty: true, minLength: 1 })
    const email = useInput(storeInfo?.email || '', { isEmpty: true, minLength: 1 })
    const file = useFile('', { isEmpty: true });

    let nameError = name.isDirty && name.isEmpty;
    let fileError = file.isDirty && file.isEmpty;
    let phoneError = phone.isDirty && phone.isEmpty;
    let addressError = address.isDirty && address.isEmpty;
    let emailError = email.isDirty && email.isEmpty;

    let isDisabled = !name.inputValid || !file.inputValid;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('imgUrl', file.value);
        formData.append('name', name.value);
        formData.append('email', email.value);
        formData.append('phone', phone.value);
        formData.append('address', address.value);

        updateStore(formData)
            .then(() => {
                setIsOpen(false)
                toast.success('Вы изменили информацию!', success);
                // name.reset();
                // phone.reset();
            })
            .catch(err => {
                toast.error('Ошибка изменения информации', error);
            })
    }

    return (
        <>
            <Button color="red" size="big" onClick={() => setIsOpen(true)}>Изменить информацию о магазине</Button>
            <HyperModal requestClose={() => setIsOpen(false)} isOpen={isOpen}>
                <form onSubmit={handleSubmit}>
                <h2>Введите название товара</h2>
                    <Input
                        className={cn(styles.input, nameError ? "errorIndicator" : null)}
                        placeholder="Введите название товара"
                        onBlur={name.onBlur}
                        type="text"
                        value={name.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                    />
                    <h2>Введите адрес магазина</h2>
                    <Input
                        className={cn(styles.input, addressError ? "errorIndicator" : null)}
                        placeholder="Введите адрес магазина"
                        onBlur={address.onBlur}
                        type="text"
                        value={address.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => address.onChange(e)}
                    />
                    <h2>Введите номер телефона</h2>
                    <Input
                        className={cn(styles.input, phoneError ? "errorIndicator" : null)}
                        placeholder="Введите номер телефона"
                        onBlur={phone.onBlur}
                        type="number"
                        value={phone.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => phone.onChange(e)}
                    />
                    <h2>Введите email адрес</h2>
                    <Input
                        className={cn(styles.input, emailError ? "errorIndicator" : null)}
                        placeholder="Введите email "
                        onBlur={email.onBlur}
                        type="email"
                        value={email.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => email.onChange(e)}
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
                        Подтвердить
                    </Button>
                </form>
            </HyperModal>
        </>
    );
};
