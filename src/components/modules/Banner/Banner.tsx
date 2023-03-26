import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Banner.module.css";
import { BannerProps } from "./Banner.props";

export const Banner = ({ banners, ...props }: BannerProps): JSX.Element => {
    return (
        <div {...props} className={styles.container}>
            <Swiper
                centeredSlides
                spaceBetween={50}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                navigation
                loop
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                className={styles.swiper}
            >
                {banners?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img className={styles.img} src={item.imgUrl} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};