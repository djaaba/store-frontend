import cn from "classnames";
import { useDispatch } from "react-redux";

import styles from "./FavoriteProduct.module.css";
import { FavoriteProductProps } from "./FavoriteProduct.props";

import {
    Button,
    CartShoppingIcon,
    FontAwesomeIcon,
    Htag,
    TrashIcon,
} from "../../UI";
import { getPrettyPrice, getPrice } from "../../../utils";
import React from "react";
// import { toggleFavorite } from "../../../store/cart/cart-actions";

export const FavoriteProduct = ({
    product,
    ...props
}: FavoriteProductProps): JSX.Element => {
    const dispatch = useDispatch();
    const price = getPrice(product.price, product.discount);

    return (
        <>
            <div {...props} className={styles.content}>
                <img className={styles.img} src={product.imgUrl} />
                <div className={styles.container}>
                    <div className={styles.info}>
                        <Htag tag="h4">{product.name}</Htag>
                        <Htag
                            tag="h4"
                            // onClick={() => dispatch(toggleFavorite(product))}
                            className={styles.remove}
                        >
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={TrashIcon}
                            />
                            Удалить
                        </Htag>
                    </div>
                    <div>
                        <div className={styles.price}>
                            <Htag tag="h2" className={styles.curPrice}>
                                {getPrettyPrice(price)} &nbsp;
                            </Htag>
                            <p className={styles.prevPrice}>
                                {getPrettyPrice(product.price)}&nbsp;
                            </p>
                        </div>
                        <Button color="red" size="big" icon>
                            <FontAwesomeIcon icon={CartShoppingIcon} />В корзину
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
