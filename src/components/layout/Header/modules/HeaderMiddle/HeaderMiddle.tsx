import Link from "next/link";
import cn from "classnames";
import React from 'react';

import styles from "./HeaderMiddle.module.css";
import { HeaderMiddleProps } from "./HeaderMiddle.props";

import { HeaderNavigation } from "../";
import { Search } from "@/components/UI";
import { INav } from "@/shared";
import { MAIN_ROUTE } from "@/utils";

const inputPlaceholder: string = "Искать товары с кэшбэком до 100%";

export const HeaderMiddle = ({
    navigation,
    data,
    ...props
}: HeaderMiddleProps): JSX.Element => {
    const navLinks: Array<INav> = navigation;
    const [query, setQuery] = React.useState<string>("");

    return (
        <section {...props} className={cn(styles.wrapper, "wrapper")}>
            <Link href={MAIN_ROUTE}>
                <img
                    className={styles.img}
                    src={data?.imgUrl}
                    alt="Логотип магазина"
                />
            </Link>
            <div className={styles.container}>
                <Search
                    className={styles.input}
                    placeholder={inputPlaceholder}
                    value={query}
                    setValue={setQuery}
                />
            </div>
            <HeaderNavigation navLinks={navLinks} />
        </section>
    );
};
