import cn from "classnames";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Router from "next/router";

import styles from "./Profile.module.css";
import { ProfileProps } from "./Profile.props";

import { ADMIN_ROUTE, LOGIN_ROUTE, success } from "@/utils";
import { Button } from "@/components/UI";
import { selectUser } from "@/store/user/selector";
import { logout } from "@/store/user/actions";

const Profile = ({ className, ...props }: ProfileProps): JSX.Element => {
    const userInfo = useSelector(selectUser);
    const dispatch = useDispatch();

    if (!userInfo.isAuth) Router.push(LOGIN_ROUTE)

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        console.log(userInfo)
        toast.success('Вы вышли из аккаунта!', success);
    }

    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                {
                    userInfo._user?.role === "ADMIN" ?
                        <Link href={ADMIN_ROUTE}>
                            <Button className={styles.btn} size="big" color="red">
                                Панель администратора
                            </Button>
                        </Link>
                        : ''
                }
                <Link href={LOGIN_ROUTE}>
                    <Button onClick={handleLogout} className={styles.btn} size="big" color="red">
                        Выйти из аккаунта
                    </Button>
                </Link>
            </main>
        </React.Fragment>
    );
};

export default Profile;