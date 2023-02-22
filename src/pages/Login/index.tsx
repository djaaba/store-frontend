import cn from "classnames";
import React from "react";

import styles from "./Login.module.css";
import { LoginProps } from "./Login.props";

import { Button, Htag, Input } from "../../components/UI";

const Login = ({ className, ...props }: LoginProps): JSX.Element => {
    function handleSubmit() {}
    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                <div className={styles.content}>
                    <Htag tag="h2">Вход или регистрация</Htag>
                    <form onSubmit={handleSubmit}>
                        <Input
                            className={styles.input}
                            placeholder="Телефон"
                            type="tel"
                        />
                        <Button className={styles.btn} color="dark" size="big">
                            Продолжить
                        </Button>
                    </form>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Login;
