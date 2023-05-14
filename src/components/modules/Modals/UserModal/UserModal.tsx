import { toast } from "react-toastify";
import cn from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "../Modal.module.css";
import { UserModalProps } from "./UserModal.props";

import { useInput } from "@/hooks";
import { error, success } from "@/utils";
import { Button, Htag, Input } from "@/components/UI";
import { changeInfo, check } from "@/api";
import { selectUser } from "@/store/user/selector";
import { IUserInfo } from "@/shared";
import { login } from "@/store/user/actions";

export const UserModal = ({ data, setOpen, ...props }: UserModalProps): JSX.Element => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const name = useInput(data._user?.name || '', { isEmpty: true, minLength: 1 })
    const address = useInput(data._user?.address || '', { isEmpty: true, minLength: 1 })
    const email = useInput(data._user?.email || '', { isEmpty: true, minLength: 1 })
    const phone = useInput(data._user?.phone || '', { isEmpty: true, minLength: 1 })

    let nameError = name.isDirty && name.isEmpty;
    // let addressError = address.isDirty && address.isEmpty;
    let emailError = email.isDirty && email.isEmpty;
    // let phoneError = phone.isDirty && phone.isEmpty;

    let isDisabled = !name.inputValid || /*!address.inputValid || !phone.inputValid|| */ !email.inputValid;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name.value);
        formData.append('email', email.value);
        formData.append('address', address.value);
        formData.append('id', user._user.id);
        formData.append('phone', phone.value);

        changeInfo(formData)
            .then((data) => {
                setOpen('')
                toast.success('Вы изменили информацию!', success);
                dispatch(login(data as IUserInfo))
            })
            .catch(err => {
                toast.error(err.response?.data.message, error);
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <Htag className={styles.title} tag="h1">Изменить информацию</Htag>
                <div className={styles.container}>
                    <div>
                        <Htag tag="h3">Как вас зовут?</Htag>
                        <Input
                            className={cn(styles.input, nameError ? "errorIndicator" : null)}
                            placeholder="Введите ваше имя"
                            onBlur={name.onBlur}
                            type="text"
                            value={name.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                        />
                    </div>
                    <div>
                        <Htag tag="h3">Как связаться с вами?</Htag>
                        <Input
                            className={cn(styles.input/*, phoneError ? "errorIndicator" : null*/)}
                            placeholder="Введите номер телефона"
                            onBlur={phone.onBlur}
                            type="number"
                            value={phone.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => phone.onChange(e)}
                        />
                    </div>
                    <div>
                        <Htag tag="h3">Введите вашу почту</Htag>
                        <Input
                            className={cn(styles.input, emailError ? "errorIndicator" : null)}
                            placeholder="Введите вашу почту"
                            onBlur={email.onBlur}
                            type="text"
                            value={email.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => email.onChange(e)}
                        />
                    </div>
                    <div>
                        <Htag tag="h3">Где вы живете?</Htag>
                        <Input
                            className={cn(styles.input/*, addressError ? "errorIndicator" : null*/)}
                            placeholder="Введите адрес доставки"
                            onBlur={address.onBlur}
                            type="text"
                            value={address.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => address.onChange(e)}
                        />
                    </div>
                </div>
                <Button
                    disabled={isDisabled}
                    type="submit"
                    color={isDisabled ? "gray" : "red"}
                    size="big"
                    onClick={(e: React.FormEvent) => handleSubmit(e)}
                >
                    Подтвердить
                </Button>
            </form>
        </>
    );
};
