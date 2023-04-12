import { useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";

import styles from "./FavoriteProduct.module.css";
import { FavoriteProductProps } from "./FavoriteProduct.props";

import {
    Button,
    CartShoppingIcon,
    FontAwesomeIcon,
    Htag,
    TrashIcon,
} from "@/components/UI";
import { getPrettyPrice, getPrice, PRODUCT_ROUTE } from "@/utils";
import { toggleFavorite } from "@/store/favorite/actions";

export const FavoriteProduct = ({
    product,
    ...props
}: FavoriteProductProps): JSX.Element => {
    const dispatch = useDispatch();
    const price = getPrice(product.price, product.discount);

    return (
        <>
            <div {...props} className={styles.content}>
                <Link href={`${PRODUCT_ROUTE}${product.id}`}>
                    <Image
                        alt={product.name}
                        height={188}
                        width={188}
                        loader={() => product.imgUrl}
                        className={styles.img}
                        src={product.imgUrl}
                    />
                </Link>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <Htag tag="h4">{product.name}</Htag>
                        <Htag
                            tag="h4"
                            onClick={() => dispatch(toggleFavorite(product))}
                            className={styles.remove}
                        >
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={TrashIcon}
                            />
                            Удалить
                        </Htag>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.price}>
                            <Htag tag="h2" className={styles.curPrice}>
                                {getPrettyPrice(price)} &nbsp;
                            </Htag>
                            <p className={styles.prevPrice}>
                                {getPrettyPrice(product.price)}&nbsp;
                            </p>
                        </div>
                        <Button
                            className={styles.btn}
                            color="red"
                            size="big"
                            icon
                        >
                            <FontAwesomeIcon icon={CartShoppingIcon} />
                            <p className={styles.btnText}>В корзину</p>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
