import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

import styles from "./FavoriteLabel.module.css";
import { FavoriteLabelProps } from "./FavoriteLabel.props";

import { Atag, FontAwesomeIcon, RegularHeartIcon, SolidHeartIcon } from "../";
import { checkFavorite, getFavoriteLabel } from "../../../utils";
import { toggleFavorite } from "@/store/favorite/actions";
import { selectFavorite } from "@/store/favorite/selector";

export const FavoriteLabel = ({
    product,
    icon,
    className,
    ...props
}: FavoriteLabelProps): JSX.Element => {
    const dispatch = useDispatch();

    const favorites = useSelector(selectFavorite);
    const isFaforite = checkFavorite(product, favorites);

    return (
        <div
            {...props}
            onClick={() => dispatch(toggleFavorite(product))}
            className={cn(styles.content, isFaforite ? styles.favorite : "")}
        >
            <Atag
                aria-label="Добавить товар в избранное"
                className={cn(styles.a, className)}
            >
                {getFavoriteLabel(isFaforite)}
            </Atag>
            {icon && isFaforite ? (
                <FontAwesomeIcon className={styles.i} icon={SolidHeartIcon} />
            ) : (
                ""
            )}
            {icon && !isFaforite ? (
                <FontAwesomeIcon className={styles.i} icon={RegularHeartIcon} />
            ) : (
                ""
            )}
        </div>
    );
};
