import cn from "classnames";
import Link from "next/link";
import React from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from "react-redux";

import styles from "./Registration.module.css";
import { RegistrationProps } from "./Registration.props";

import { Button, Htag, Input } from "@/components/UI";
import { login, registation } from "@/api/userAPI";
import { LOGIN_ROUTE, MAIN_ROUTE } from "@/utils/routes";
import { selectUser } from "@/store/user/selector";
import { setUser, loginUser } from "@/store/user/actions";
import { IUser, IUserInfo } from "@/shared";
import { useInput } from "@/hooks";

const Registration = ({ className, ...props }: RegistrationProps): JSX.Element => {
    const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true })
    const name = useInput('', { isEmpty: true, minLength: 1 })
    const password = useInput('', { isEmpty: true, minLength: 5 })

    let nameError = name.isDirty && name.isEmpty;
    let emailError = email.isDirty && email.emailError;
    let passwordError = password.isDirty && password.isEmpty;

    const user: IUser = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await registation(name.value, email.value, password.value)
            dispatch(setUser(response as IUserInfo))
            dispatch(loginUser())
            console.log(user)
            Router.push(MAIN_ROUTE)
        } catch (error: any) {
            console.log(error.response.data.message)
        }
    }

    return (
        <main {...props} className={cn(styles.main, "wrapper")}>
            <div className={styles.content}>
                <Htag tag="h2">Регистрация</Htag>
                <form onSubmit={handleSubmit}>
                    <Input
                        className={styles.input}
                        placeholder="Введите ваше Имя"
                        onBlur={name.onBlur}
                        type="text"
                        value={name.value}
                        onChange={(e: any) => name.onChange(e)}
                    />
                    {nameError && <div>name!!</div>}
                    <Input
                            className={styles.input}
                            placeholder="Введите ваш email"
                            onBlur={email.onBlur}
                            type="email"
                            value={email.value}
                            onChange={(e: any) => email.onChange(e)}
                        />
                   
                    {emailError && <div>email format</div>}
                    <Input
                        className={styles.input}
                        placeholder="Введите ваш пароль"
                        onBlur={password.onBlur}
                        type="password"
                        value={password.value}
                        onChange={(e: any) => password.onChange(e)}
                    />
                    {passwordError && <div>password!!</div>}
                    <div>
                        <button
                            disabled={!email.inputValid || !name.inputValid || !password.inputValid}
                            type="submit">
                            Продолжить
                        </button>
                    </div>
                    {/* <Button
                        disabled={!isEmailValid || !isNameValid || !isPasswordValid}
                        type="submit"
                        className={styles.btn} color="dark" size="big">
                        Продолжить
                    </Button> */}
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
