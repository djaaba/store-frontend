import cn from "classnames";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Favorite.module.css";
import { FavoriteProps } from "./Favorite.props";

import { FontAwesomeIcon, Htag, RegularHeartIcon } from "../../components/UI";
import { FavoriteProduct } from "../../components/common/FavoriteProduct/FavoriteProduct";
import { getId } from "../../utils";
import { IProduct } from "../../interfaces";
import { selectFavorite } from "../../store/favorite/selector";
import { checkFavorite } from "../../store/favorite/actions";

export const Favorite = ({
    className,
    ...props
}: FavoriteProps): JSX.Element => {
    const favorite = useSelector(selectFavorite);

    return (
        <React.Fragment {...props}>
            <main className={styles.main}>
                {!favorite.length ? (
                    <div className="wrapper">
                        <Htag tag="h1">В избранном пока ничего нет</Htag>
                        <p>
                            Добавляйте товары в Избранное с помощью
                            <FontAwesomeIcon
                                className={styles.i}
                                icon={RegularHeartIcon}
                            />
                        </p>
                    </div>
                ) : (
                    <div className="wrapper">
                        <div className={styles.title}>
                            <Htag tag="h1">Избранное</Htag>
                            <p className={styles.count}>{favorite.length}</p>
                        </div>
                        <ul className={styles.ul}>
                            {favorite.map((item: IProduct) => (
                                <li className={styles.li} key={getId()}>
                                    <FavoriteProduct product={item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </main>
        </React.Fragment>
    );
};
