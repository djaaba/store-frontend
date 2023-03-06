import Link from "next/link";
import cn from "classnames";
import { useSelector } from "react-redux";

import styles from "./HeaderMiddle.module.css";
import { HeaderMiddleProps } from "./HeaderMiddle.props";

import { HeaderNavigation } from "../";
import { Button, Search } from "@/components/UI";
import { INav } from "@/shared";
import { selectUser } from "@/store/user/selector";
import { ADMIN_ROUTE, MAIN_ROUTE } from "@/utils";

const inputPlaceholder: string = "Искать товары с кэшбэком до 100%";

export const HeaderMiddle = ({
    navigation,
    ...props
}: HeaderMiddleProps): JSX.Element => {
    const userInfo = useSelector(selectUser);

    const navLinks: Array<INav> = navigation;

    return (
        <section {...props} className={cn(styles.wrapper, "wrapper")}>
            <Link href={MAIN_ROUTE}>
                <img
                    className={styles.img}
                    src="/assets/header/logo.svg"
                    alt="Логотип магазина"
                />
            </Link>
            {
                userInfo.isAuth ?
                    <Link href={ADMIN_ROUTE}>
                        <Button className={styles.btn} size="big" color="red">
                            Панель администратора
                        </Button>
                    </Link>
                    : ''
            }
            <div className={styles.container}>
                <Search
                    className={styles.input}
                    placeholder={inputPlaceholder}
                />
            </div>
            <HeaderNavigation navLinks={navLinks} />
        </section>
    );
};
