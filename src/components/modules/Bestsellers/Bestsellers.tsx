import styles from "./Bestsellers.module.css";
import { BestsellersProps } from "./Bestsellers.props";

import { Htag } from "../../UI";
import { Product, Scroll } from "..";

export const Bestsellers = ({
    items,
    ...props
}: BestsellersProps): JSX.Element => {
    return (
        <>
            <section {...props} className={styles.container}>
                <Htag tag="h1">Хиты продаж</Htag>
                <Scroll>
                    {items?.map((item, index) => (
                        <Product key={item.id} item={item} />
                    ))}
                </Scroll>
            </section>
        </>
    );
};