import cn from "classnames";
import React from "react";

import styles from "./ItemCounter.module.css";
import { ItemCounterProps } from "./ItemCounter.props";

import { getId } from "@/utils";

export const ItemCounter = ({
    itemsPerPage,
    setItemsPerPage,
    items,
    ...props
}: ItemCounterProps): JSX.Element => {

    return (
        <>
            <div className={cn(styles.main, props.className)}>
                {
                    items.map((item: number) => (
                        <p
                            onClick={() => setItemsPerPage(item)}
                            key={getId()}
                            className={cn(styles.item, item === itemsPerPage ? styles.active : null)}
                        >
                            {item}
                        </p>
                    ))
                }
            </div>
        </>
    )
}