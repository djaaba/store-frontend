import cn from "classnames";
import React, { useState } from "react";
import { getId } from "../../utils";

import styles from "./Catalog.module.css";
// import { CatalogProps } from "./Catalog.props";

import { catalogCategories } from "@/plug";

const Catalog = ({
    className,
    // categories,
    ...props
}: CatalogProps): JSX.Element => {
    const [links, setLinks] = useState(catalogCategories[0]);

    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                <div className={styles.content}>
                    <ul className={styles.categories}>
                        {catalogCategories.map((item) => (
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
                        {links.items?.map((link) => (
                            <li
                                className={styles.subcategoriesLi}
                                key={getId()}
                            >
                                <a
                                    href={link.link}
                                    className={styles.link}
                                    aria-label={`Ссылка на ${link.subtitle}`}
                                >
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

export default Catalog;

interface CatalogProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}