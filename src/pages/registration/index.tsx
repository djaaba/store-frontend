import cn from "classnames";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Registration.module.css";
import { RegistrationProps } from "./Registration.props";

import { Button, Htag, Input } from "@/components/UI";
import { login, registation } from "@/api/userAPI";
import { LOGIN_ROUTE } from "@/utils/routes";
import { selectUser } from "@/store/user/selector";
import { setUser, loginUser } from "@/store/user/actions";
import { IUserInfo } from "@/shared";

const Registration = ({ className, ...props }: RegistrationProps): JSX.Element => {
    const [password, setPassword] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')
    const [name, setName] = React.useState<string>('')
    
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await registation(name, email, password)
        dispatch(setUser(response as IUserInfo ))
        dispatch(loginUser())
        console.log(user)
    }

    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                <div className={styles.content}>
                    <Htag tag="h2">Регистрация</Htag>
                    <form onSubmit={handleSubmit}>
                        <Input
                            className={styles.input}
                            placeholder="Введите ваше Имя"
                            type="text"
                            value={name}
                            setValue={(name: string) => setName(name)}
                        />
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
                        <Button type="submit" className={styles.btn} color="dark" size="big">
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
        </React.Fragment>
    );
};

export default Registration;
