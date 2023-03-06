import cn from "classnames";
import React from "react";
import Link from "next/link";

import styles from "./Login.module.css";
import { LoginProps } from "./Login.props";

import { Button, Htag, Input } from "../../components/UI";
import { login, registation } from "../api/userAPI";
import { REGISTRATION_ROUTE } from "@/routes";

const Login = ({ className, ...props }: LoginProps): JSX.Element => {

    const handleSubmit = async () => {
        // if (isLogin) {
        //     const response = await login()
        // } else {
        //     const response = await registation()
        //     console.log(response)
        // }
    }

    const [password, setPassword] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')

    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                <div className={styles.content}>
                    <Htag tag="h2">Авторизация</Htag>
                    <form onSubmit={handleSubmit}>
                        <Input
                            className={styles.input}
                            placeholder="Введите ваш email"
                            type="email"
                            value={email}
                            setValue={(email: string) => setEmail(email)}
                        />
                        <Input
                            className={styles.input}
                            placeholder="Введите ваш пароль"
                            type="password"
                            value={password}
                            setValue={(pswd: string) => setPassword(pswd)}
                        />
                        <Button className={styles.btn} color="dark" size="big">
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
