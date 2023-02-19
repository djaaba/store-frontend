import cn from "classnames";

import styles from "./Product.module.css";
import { ProductProps } from "./Product.props";

import { getPrettyPrice, getPrice } from "../../../utils/";
import {
    Button,
    FontAwesomeIcon,
    CartShoppingIcon,
    RegularHeartIcon,
    SignalIcon,
    SolidHeartIcon,
} from "../../UI/index";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../../store/favorite/selector";
import { checkFavorite, toggleFavorite } from "../../../store/favorite/actions";
import { addToCart } from "../../../store/cart/actions";
import { IProduct } from "../../../interfaces";

import { check } from "./helpers/check";

export const Product = ({ item, ...props }: ProductProps): JSX.Element => {
    const favorites = useSelector(selectFavorite);
    const {
        imgUrl,
        name,
        description,
        count,
        discount,
        id,
        isFavorite,
        isSelected,
        price,
        characteristics,
    } = item;

    const discountPrice = getPrice(price, discount);
    const dispatch = useDispatch();

    const toggle = (item: IProduct) => {
        dispatch(toggleFavorite(item));
    };

    const add = (item: IProduct) => {
        dispatch(addToCart(item));
    };

    return (
        <>
            <main className={styles.main}>
                <div>
                    <div className={styles.container}>
                        <img src={imgUrl} />
                        <span className={styles.shadow}>
                            <div className={styles.discount}>
                                <p className={styles.discountText}>
                                    -{discount}%
                                </p>
                            </div>
                        </span>
                    </div>
                    <p className={cn(styles.p, styles.title)}>{name}</p>
                </div>
                <div>
                    {/* <p className={styles.rating}>4,4</p> */}
                    <div className={styles.prices}>
                        <p className={styles.curPrice}>
                            {getPrettyPrice(discountPrice)}
                        </p>
                        <p className={styles.prevPrice}>
                            {getPrettyPrice(price)}
                        </p>
                    </div>
                    <div className={styles.btnGroup}>
                        <Button
                            color="red"
                            size="medium"
                            onClick={() => add(item)}
                        >
                            <FontAwesomeIcon icon={CartShoppingIcon} />
                        </Button>
                        <FontAwesomeIcon
                            onClick={() => toggle(item)}
                            className={styles.iconBtn}
                            icon={
                                check(item, favorites)
                                    ? SolidHeartIcon
                                    : RegularHeartIcon
                            }
                        />
                        <FontAwesomeIcon
                            className={styles.iconBtn}
                            icon={SignalIcon}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};
