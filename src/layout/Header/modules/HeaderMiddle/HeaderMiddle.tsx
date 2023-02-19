import { Link } from "react-router-dom";
import cn from "classnames";
import { useMemo } from "react";

import styles from "./HeaderMiddle.module.css";
import { HeaderMiddleProps } from "./HeaderMiddle.props";

import { Search } from "../../../../components/UI";
import { INav } from "../../../../shared";
import { navigation } from "../HeaderNavigation/helpers/navigation";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";

const inputPlaceholder: string = "Искать товары с кэшбэком до 100%";

export const HeaderMiddle = ({ ...props }: HeaderMiddleProps): JSX.Element => {
    const navLinks: Array<INav> = useMemo(() => navigation, []);

    return (
        <section {...props} className={cn(styles.wrapper, "wrapper")}>
            <div className={styles.content}>
                <Link to="/">
                    <img
                        className={styles.img}
                        src="/assets/header/logo.svg"
                        alt="Логотип магазина"
                    />
                </Link>
            </div>
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
