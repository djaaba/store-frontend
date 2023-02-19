import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Slider.module.css";
import { SliderProps } from "./Slider.props";

import { Navigation, Pagination } from "swiper";

export const Slider = ({ images, ...props }: SliderProps): JSX.Element => {
    return (
        <main className={styles.main}>
            <Swiper
                spaceBetween={50}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                navigation
                loop
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                className={styles.swiper}
            >
                {images.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img className={styles.img} src={item.imgUrl} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
};
