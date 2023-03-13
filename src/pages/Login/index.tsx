import cn from "classnames";
import Link from "next/link";
import React from 'react';
import Router from 'next/router';
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import styles from "./Login.module.css";
import { LoginProps } from "./Login.props";
import 'react-toastify/dist/ReactToastify.css';

import { Button, Htag, Input } from "../../components/UI";
import { login } from "../../api/userAPI";
import { MAIN_ROUTE, REGISTRATION_ROUTE } from "@/utils/routes";
import { useInput } from "@/hooks";
import { IUserInfo } from "@/shared";
import { login as userLogin } from "@/store/user/actions";
import { error, success } from "@/utils";

const Login = ({ className, ...props }: LoginProps): JSX.Element => {
    const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true })
    const password = useInput('', { isEmpty: true, minLength: 5 })

    let emailError = email.isDirty && email.emailError;
    let passwordError = password.isDirty && password.isEmpty;

    let isDisabled = !email.inputValid || !password.inputValid;

    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        login(email.value, password.value).then(data => {
            dispatch(userLogin(data as IUserInfo))
            Router.push(MAIN_ROUTE)
            toast.success('Вы авторизованы!', success);
        }).catch(err => {
            toast.error('Ошибка 1', error);
            console.warn(err);
        })
        // try {
        //     const response = await login(email.value, password.value);
        //     dispatch(userLogin(response as IUserInfo))
        //     Router.push(MAIN_ROUTE)
        //     toast.success('Вы авторизованы!', success);
        // } catch (err) {
        //     toast.error('Что-то пошло не так', error);
        //     console.warn(err);
        // }
    }

    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                <div className={styles.content}>
                    <Htag tag="h2">Авторизация</Htag>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.container}>
                            <Input
                                className={cn(styles.input, emailError ? styles.indicator : null)}
                                placeholder="Введите ваш email"
                                onBlur={email.onBlur}
                                type="email"
                                value={email.value}
                                onChange={(e: any) => email.onChange(e)}
                            />
                            {emailError && <div className={styles.message}>Неверный формат почты</div>}
                        </div>
                        <div className={styles.container}>
                            <Input
                                className={cn(styles.input, passwordError ? styles.indicator : null)}
                                placeholder="Введите ваш пароль"
                                onBlur={password.onBlur}
                                type="password"
                                value={password.value}
                                onChange={(e: any) => password.onChange(e)}
                            />
                            {passwordError && <div className={styles.message}>Введите ваш пароль</div>}
                        </div>
                        <Button
                            disabled={isDisabled}
                            type="submit"
                            className={styles.btn} color={isDisabled ? "gray" : "dark"} size="big">
                            Продолжить
                        </Button>
                        <ToastContainer />
                    </form>
                    <div className={styles.option}>
                        Нет аккаунта?&nbsp;
                        <span>
                            <Link href={REGISTRATION_ROUTE}>
                                Зарегестрироваться!
                            </Link>
                        </span>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Login;
