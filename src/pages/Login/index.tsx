import cn from "classnames";
import Link from "next/link";
import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import styles from "./Login.module.css";
// import { LoginProps } from "./Login.props";

import { Button, Htag, Input } from "@/components/UI";
import { login } from "@/api";
import { MAIN_ROUTE, REGISTRATION_ROUTE } from "@/utils/routes";
import { useInput } from "@/hooks";
import { IUserInfo } from "@/shared";
import { login as userLogin } from "@/store/user/actions";
import { error, success } from "@/utils";
import { Meta } from "@/components/seo/Meta";

const Login = ({ className, ...props }: LoginProps): JSX.Element => {
    const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true })
    const password = useInput('', { isEmpty: true, minLength: 5 })

    let emailError = email.isDirty && email.emailError;
    let passwordError = password.isDirty && password.isEmpty;

    let isDisabled = !email.inputValid || !password.inputValid;

    const dispatch = useDispatch();
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        login(email.value, password.value).then(data => {
            dispatch(userLogin(data as IUserInfo))
            toast.success('Вы авторизованы!', success);
            router.push(MAIN_ROUTE)
        }).catch(err => {
            toast.error('Ошибка авторизации', error);
        })
    }

    return (
        <React.Fragment {...props}>
            <Meta title="Войти в аккаунт" description="Страница логина" />
            <main className={cn(styles.main, "wrapper")}>
                <div className={styles.content}>
                    <Htag tag="h2">Авторизация</Htag>
                    <form onSubmit={handleSubmit}>
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
                            className={styles.btn}
                            color={isDisabled ? "gray" : "dark"}
                            size="big"
                        >
                            Продолжить
                        </Button>
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

export interface LoginProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }