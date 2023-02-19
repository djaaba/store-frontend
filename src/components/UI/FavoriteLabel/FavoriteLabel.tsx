import cn from "classnames";
import React from "react";
import { useDispatch } from "react-redux";

import styles from "./FavoriteLabel.module.css";
import { FavoriteLabelProps } from "./FavoriteLabel.props";

import { Atag, FontAwesomeIcon, RegularHeartIcon, SolidHeartIcon } from "../";
import { getFavorite } from "../../../utils";
// import { toggleFavorite } from "../../../store/cart/cart-actions";

export const FavoriteLabel = ({
    product,
    icon,
    className,
    ...props
}: FavoriteLabelProps): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <div
            {...props}
            // onClick={() => dispatch(toggleFavorite(product))}
            className={cn(
                styles.content,
                product.isFavorite ? styles.favorite : ""
            )}
        >
            <Atag
                aria-label="Добавить товар в избранное"
                className={cn(styles.a, className)}
            >
                {getFavorite(product.isFavorite)}
            </Atag>
            {icon && product.isFavorite ? (
                <FontAwesomeIcon className={styles.i} icon={SolidHeartIcon} />
            ) : (
                ""
            )}
            {icon && !product.isFavorite ? (
                <FontAwesomeIcon className={styles.i} icon={RegularHeartIcon} />
            ) : (
                ""
            )}
        </div>
    );
};
