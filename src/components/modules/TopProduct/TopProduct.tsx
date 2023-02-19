import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./TopProduct.module.css";
import { TopProductProps } from "./TopProduct.props";

import { Htag } from "../../UI";
import { selectCart } from "../../../store/cart/selector";
import { TopProductItem } from "../";
import { IProduct } from "../../../shared";

export const TopProduct = ({
    items,
    ...props
}: TopProductProps): JSX.Element => {
    const topProducts = useSelector(selectCart);

    return (
        <section {...props} className={styles.main}>
            <Htag tag="h2" className={cn(styles.title, styles.wrapper)}>
                Товары дня
            </Htag>
            <Swiper
                spaceBetween={50}
                scrollbar={{ draggable: true }}
                navigation
                loop
                slidesPerView={1}
                modules={[Navigation, Pagination]}
            >
                {items.map((item: IProduct) => (
                    <SwiperSlide key={item.id}>
                        <TopProductItem
                            className={styles.wrapper}
                            item={item}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
