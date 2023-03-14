import React from "react";

import styles from "./Categories.module.css";
import { CategoriesProps } from "./Categories.props";

import { Htag, Image } from "../../UI";
import { Scroll } from "../";

export const Categories = ({
    categories,
    ...props
}: CategoriesProps): JSX.Element => {
    return (
        <section {...props} className={styles.container}>
            <Htag tag="h1">Популярные категории</Htag>
            <Scroll>
                {categories?.map((item, index) => (
                    <React.Fragment key={index}>
                        <Image
                            className={styles.img}
                            alt={`Картинка категории ${item.name}`}
                            imgUrl={item.imgUrl}
                        />
                        <p className={styles.p}>{item.name}</p>
                    </React.Fragment>
                ))}
            </Scroll>
        </section>
    );
};
