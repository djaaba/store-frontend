import styles from "./Bestsellers.module.css";
import { BestsellersProps } from "./Bestsellers.props";

import { Htag } from "../../UI/index";
import { Product } from "../index";

export const Bestsellers = ({ items, ...props }: BestsellersProps): JSX.Element => {
    return (
        <>
            <main {...props} className={styles.main}>
                <Htag tag="h1">Хиты продаж</Htag>
                {items.map((item) => (
                    <Product key={item.id} item={item} />
                ))}
            </main>
        </>
    );
};
