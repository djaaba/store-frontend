import Link from "next/link";
import cn from "classnames";

import styles from "./HeaderMiddle.module.css";
import { HeaderMiddleProps } from "./HeaderMiddle.props";

import { HeaderNavigation } from "../";
import { Search } from "@/components/UI";
import { INav } from "@/shared";
import { MAIN_ROUTE } from "@/utils";

const inputPlaceholder: string = "Искать товары с кэшбэком до 100%";

export const HeaderMiddle = ({
    navigation,
    ...props
}: HeaderMiddleProps): JSX.Element => {
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
