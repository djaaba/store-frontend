import { toast } from "react-toastify";
import cn from "classnames";
import React from "react";
import HyperModal from 'react-hyper-modal';
import { useDispatch, useSelector } from "react-redux";

import styles from "./ChangeInfoModal.module.css";
import { ChangeInfoModalProps } from "./ChangeInfoModal.props";

import { useInput } from "@/hooks";
import { error, success } from "@/utils";
import { Button, FontAwesomeIcon, Input, RewriteIcon } from "@/components/UI";
import { changeInfo, check } from "@/api";
import { selectUser } from "@/store/user/selector";
import { IUserInfo } from "@/shared";
import { login } from "@/store/user/actions";

export const ChangeInfoModal = ({ data, ...props }: ChangeInfoModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const name = useInput(data._user?.name || '', { isEmpty: true, minLength: 1 })
    const address = useInput(data._user?.address || '', { isEmpty: true, minLength: 1 })
    const email = useInput(data._user?.email || '', { isEmpty: true, minLength: 1 })

    let nameError = name.isDirty && name.isEmpty;
    let addressError = address.isDirty && address.isEmpty;
    let emailError = email.isDirty && email.isEmpty;

    let isDisabled = !name.inputValid || !address.inputValid || !email.inputValid;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name.value);
        formData.append('email', email.value);
        formData.append('address', address.value);
        formData.append('id', user._user.id);

        changeInfo(formData)
            .then((data) => {
                setIsOpen(false)
                toast.success('Вы изменили информацию!', success);
                dispatch(login(data as IUserInfo))
            })
            .catch(err => {
                toast.error('Ошибка изменения информации', error);
            })
    }

    return (
        <>
            <Button onClick={() => setIsOpen(true)} className={props.className} size="big" color="red">
                <FontAwesomeIcon icon={RewriteIcon} />
            </Button>
            <HyperModal requestClose={() => setIsOpen(false)} isOpen={isOpen}>
                <form onSubmit={handleSubmit}>
                    <h2>Как вас зовут?</h2>
                    <Input
                        className={cn(styles.input, nameError ? "errorIndicator" : null)}
                        placeholder="Введите ваше имя"
                        onBlur={name.onBlur}
                        type="text"
                        value={name.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                    />
                    <h2>Введите вашу почту</h2>
                    <Input
                        className={cn(styles.input, emailError ? "errorIndicator" : null)}
                        placeholder="Введите вашу почту"
                        onBlur={email.onBlur}
                        type="text"
                        value={email.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => email.onChange(e)}
                    />
                    <h2>Где вы живете?</h2>
                    <Input
                        className={cn(styles.input, addressError ? "errorIndicator" : null)}
                        placeholder="Введите адрес доставки"
                        onBlur={address.onBlur}
                        type="text"
                        value={address.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => address.onChange(e)}
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
