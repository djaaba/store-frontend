import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./TopProduct.module.css";
import { TopProductProps } from "./TopProduct.props";

import { Htag, WhiteWrapper } from "../../UI";
import { TopProductItem } from "../";
import { IDevice } from "../../../shared";

const breakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 0,
    },
    1200: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
};

export const TopProduct = ({
    items,
    ...props
}: TopProductProps): JSX.Element => {
    return (
        <WhiteWrapper {...props} className={styles.main}>
            <Htag tag="h2" className={cn(styles.title)}>
                Товары дня
            </Htag>
            <Swiper
                spaceBetween={50}
                breakpoints={breakpoints}
                scrollbar={{ draggable: true }}
                navigation
                loop
                modules={[Navigation, Pagination]}
            >
                {items?.map((item: IDevice) => (
                    <SwiperSlide key={item.id}>
                        <TopProductItem
                            className={styles.wrapper}
                            item={item}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </WhiteWrapper>
    );
};
