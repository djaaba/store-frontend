import cn from "classnames";
import Link from "next/link";
import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import styles from "./Registration.module.css";
// import { RegistrationProps } from "./Registration.props";

import { Button, Htag, Input } from "@/components/UI";
import { registation } from "@/api";
import { LOGIN_ROUTE, MAIN_ROUTE } from "@/utils/routes";
import { login } from "@/store/user/actions";
import { IUserInfo } from "@/shared";
import { useInput } from "@/hooks";
import { error, success } from "@/utils";

const Registration = ({ className, ...props }: RegistrationProps): JSX.Element => {
    const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true })
    const name = useInput('', { isEmpty: true, minLength: 1 })
    const password = useInput('', { isEmpty: true, minLength: 5 })

    let nameError = name.isDirty && name.isEmpty;
    let emailError = email.isDirty && email.emailError;
    let passwordError = password.isDirty && password.isEmpty;

    let isDisabled = !email.inputValid || !name.inputValid || !password.inputValid;

    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await registation(name.value, email.value, password.value)
            dispatch(login(response as IUserInfo))
            router.push(MAIN_ROUTE)
            toast.success('Вы зарегистрировались!', success);
        } catch (err) {
            console.log(err.response.data.message)
            toast.error('Что-то пошло не так', error);
        }
    }

    return (
        <main {...props} className={cn(styles.main, "wrapper")}>
            <div className={styles.content}>
                <Htag tag="h2">Регистрация</Htag>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.container}>
                        <Input
                            className={cn(styles.input, nameError ? "errorIndicator" : null)}
                            placeholder="Введите ваше Имя"
                            onBlur={name.onBlur}
                            type="text"
                            value={name.value}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => name.onChange(e)}
                        />
                        {nameError && <div className={"errorMessage"}>Введите ваше имя</div>}
                    </div>
                    <div className={styles.container}>
                        <Input
                            className={cn(styles.input, emailError ? "errorIndicator" : null)}
                            placeholder="Введите ваш email"
                            onBlur={email.onBlur}
                            type="email"
                            value={email.value}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => email.onChange(e)}
                        />
                        {emailError && <div className={"errorMessage"}>Неверный формат почты</div>}
                    </div>
                    <div className={styles.container}>
                        <Input
                            className={cn(styles.input, passwordError ? "errorIndicator" : null)}
                            placeholder="Введите ваш пароль"
                            onBlur={password.onBlur}
                            type="password"
                            value={password.value}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => password.onChange(e)}
                        />
                        {passwordError && <div className={"errorMessage"}>Введите ваш пароль</div>}
                    </div>
                    <Button
                        disabled={isDisabled}
                        type="submit"
                        className={styles.btn} color={isDisabled ? "gray" : "dark"} size="big">
                        Продолжить
                    </Button>
                </form>
                <div className={styles.option}>
                    Уже усть аккаунт?&nbsp;
                    <span>
                        <Link href={LOGIN_ROUTE}>
                            Войти!
                        </Link>
                    </span>
                </div>
            </div>
        </main>
    );
};

export default Registration;

interface RegistrationProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }