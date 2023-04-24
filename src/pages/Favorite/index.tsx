import { useSelector } from "react-redux";

import styles from "./Favorite.module.css";
// import { FavoriteProps } from "./Favorite.props";

import { FontAwesomeIcon, Htag, RegularHeartIcon } from "@/components/UI";
import { FavoriteProduct } from "@/components/common/FavoriteProduct/FavoriteProduct";
import { getId } from "@/utils";
import { IDevice } from "@/shared";
import { selectFavorite } from "@/store/favorite/selector";
import { Meta } from "@/components/seo/Meta";

const Favorite = ({ className, ...props }: FavoriteProps): JSX.Element => {
    const favorite = useSelector(selectFavorite);

    return (
        <>
            <Meta title="Избранное" description="Страница Избранного" />
            <main {...props} className={styles.main}>
                <div className="wrapper">
                    {!favorite.length ? (
                        <>
                            <Htag tag="h1">В избранном пока ничего нет</Htag>
                            <p>
                                Добавляйте товары в Избранное с помощью
                                <FontAwesomeIcon
                                    className={styles.i}
                                    icon={RegularHeartIcon}
                                />
                            </p>
                        </>
                    ) : (
                        <>
                            <div className={styles.title}>
                                <Htag tag="h1">Избранное</Htag>
                                <p className={styles.count}>
                                    {favorite.length}
                                </p>
                            </div>
                            <ul className={styles.ul}>
                                {favorite.map((item: IDevice) => (
                                    <li className={styles.li} key={getId()}>
                                        <FavoriteProduct product={item} />
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </main>
        </>
    );
};

export default Favorite;

interface FavoriteProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }