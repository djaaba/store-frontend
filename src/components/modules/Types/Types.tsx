import React from "react";

import styles from "./Types.module.css";
import { TypesProps } from "./Types.props";

import { Htag, Image } from "@/components/UI";
import { Scroll } from "../";

export const Types = ({
    types,
    ...props
}: TypesProps): JSX.Element => {
    return (
        <section {...props} className={styles.container}>
            <Htag tag="h1">Популярные категории</Htag>
            <Scroll>
                {types?.map((item, index) => (
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
