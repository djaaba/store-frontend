import cn from "classnames";

import styles from "./Categories.module.css";
import { Htag, Image } from "../../UI/index";

import { CategoriesProps } from "./Categories.props";
import { getId } from "../../../utils";
import { Scroll } from "../Scroll/Scroll";

export const Categories = ({ categories, ...props }: CategoriesProps): JSX.Element => {
    return (
        <>
            <section {...props} className={styles.main}>
                <Htag tag="h1">Популярные категории</Htag>
                <Scroll>
                    {
                        categories.map((item) => (
                            <>
                                <Image
                                    key={getId()}
                                    className={styles.img}
                                    alt={`Картинка категории ${item.name}`}
                                    imgUrl={item.imgUrl}
                                />
                                <p className={styles.p}>{item.name}</p>
                            </>
                        ))
                    }
                </Scroll>
            </section>
        </>
    );
};
