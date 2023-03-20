import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Product.module.css";
import { ProductProps } from "./Product.props";

import { getPrettyPrice, getPrice, searchById } from "../../../utils/";
import {
    Button,
    FontAwesomeIcon,
    CartShoppingIcon,
    RegularHeartIcon,
    SignalIcon,
    SolidHeartIcon,
} from "../../UI/";
import { selectFavorite } from "../../../store/favorite/selector";
import { toggleFavorite } from "../../../store/favorite/actions";
import { addToCart } from "../../../store/cart/actions";
import { IDevice } from "../../../shared";

export const Product = ({ item, ...props }: ProductProps): JSX.Element => {
    const favorites = useSelector(selectFavorite);
    const {
        imgUrl,
        name,
        description,
        count,
        discount,
        id,
        price,
    } = item;

    const discountPrice = getPrice(price, discount);
    const dispatch = useDispatch();

    const toggle = (item: IDevice) => {
        dispatch(toggleFavorite(item));
    };

    const add = (item: IDevice) => {
        dispatch(addToCart(item));
    };

    return (
        <>
            <main className={styles.main}>
                <div>
                    <div className={styles.container}>
                        <img className={styles.img} src={imgUrl} />
                        <span className={styles.shadow}>
                            {
                                discount ?
                                    <div className={styles.discount}>
                                        <p className={styles.discountText}>
                                            -{discount}%
                                        </p>
                                    </div>
                                    : ""
                            }
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
                        {
                            discount ?
                                <p className={styles.prevPrice}>
                                    {getPrettyPrice(price)}
                                </p>
                                : ""
                        }
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
                                searchById(item, favorites)
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
