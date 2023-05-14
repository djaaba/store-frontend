import styles from "./ItemSlider.module.css";
import { ItemSliderProps } from "./ItemSlider.props";

import { Htag } from "../../UI";
import { Product, Scroll } from "..";

export const ItemSlider = ({
    items,
    title,
    ...props
}: ItemSliderProps): JSX.Element => {
    return (
        <>
            <section {...props} className={items.length < 5? styles.justifiedContainer : styles.container}>
                <Htag tag="h1">{title}</Htag>
                <Scroll>
                    {items?.map((item, index) => (
                        <Product key={item.id} item={item} />
                    ))}
                </Scroll>
            </section>
        </>
    );
};