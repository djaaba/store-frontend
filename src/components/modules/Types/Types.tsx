import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

import styles from "./Types.module.css";
import { TypesProps } from "./Types.props";

import { Htag, Picture } from "@/components/UI";
import { Scroll } from "../";
import { PRODUCT_ROUTE } from "@/utils";
import { toggleType } from "@/store/filter/types/actions";

export const Types = ({
    types,
    ...props
}: TypesProps): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <section {...props} className={styles.container}>
            <Htag tag="h1">Популярные категории</Htag>
            <Scroll>
                {types?.map((item, index) => (
                    <React.Fragment key={index}>
                        <Link href={PRODUCT_ROUTE} onClick={() => dispatch(toggleType(item))}>
                            <Picture
                                className={styles.img}
                                alt={`Картинка категории ${item.name}`}
                                imgUrl={item.imgUrl}
                                width={120}
                                height={120}
                            />
                        </Link>
                        <p className={styles.p}>{item.name}</p>
                    </React.Fragment>
                ))}
            </Scroll>
        </section>
    );
};