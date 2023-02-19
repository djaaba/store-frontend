import cn from "classnames";
import React, { MouseEvent, useEffect, useState } from "react";
import { getId } from "../../utils";

import styles from "./Catalog.module.css";
import { CatalogProps } from "./Catalog.props";

const categories = [
    {
        id: 1,
        title: "Акции, скидки и распродажи",
        link: "/",
        items: [
            {
                subtitle: "Подарки",
                link: "/",
            },
            {
                subtitle: "Акция",
                link: "/",
            },
            {
                subtitle: "Все акции",
                link: "/",
            },
            {
                subtitle: "Экспресс",
                link: "/",
            },
        ],
    },
    {
        id: 2,
        title: "Смартфоны и гаджеты",
        link: "/",
        items: [
            {
                subtitle: "Смартфоны, мобильные телефоны",
                link: "/",
            },
            {
                subtitle: "Xiaomi",
                link: "/",
            },
            {
                subtitle: "Планшеты и электронные книги",
                link: "/",
            },
            {
                subtitle: "Гаджеты",
                link: "/",
            },
        ],
    },
    {
        id: 3,
        title: "Ноутбуки и компьютеры",
        link: "/",
        items: [
            {
                subtitle: "Ноутбуки",
                link: "/",
            },
            {
                subtitle: "Компьютеры и мониторы",
                link: "/",
            },
            {
                subtitle: "Планшеты и электронные книги",
                link: "/",
            },
            {
                subtitle: "Компьютеры и комплектующие",
                link: "/",
            },
        ],
    },
];

export const Catalog = ({ className, ...props }: CatalogProps): JSX.Element => {
    const [links, setLinks] = useState(categories[0]);

    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                <div className={styles.content}>
                    <ul className={styles.categories}>
                        {categories.map((item) => (
                            <li
                                onMouseOver={() => setLinks(item)}
                                key={item.id}
                                className={cn(
                                    styles.categoriesLi,
                                    item.id === links.id ? styles.active : ""
                                )}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.subcategories}>
                        {links.items.map((link) => (
                            <li
                                className={styles.subcategoriesLi}
                                key={getId()}
                            >
                                <a href={link.link} aria-label="Ссылка">
                                    {link.subtitle}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </React.Fragment>
    );
};
