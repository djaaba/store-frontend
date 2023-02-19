import cn from "classnames";
import React from "react";
import {
    Bestsellers,
    Brands,
    Categories,
    Slider,
    TopProductSlider,
} from "../../components/modules";
import { images } from "../../layout/helpers/images";

import styles from "./Main.module.css";
import { MainProps } from "./Main.props";

export const Main = ({ className, ...props }: MainProps): JSX.Element => {
    return (
        <React.Fragment {...props}>
            <main>
                <div className="wrapper">
                    <div className={styles.sliders}>
                        <Slider images={images} />
                        <TopProductSlider />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={cn(styles.fixPadding, "wrapper")}>
                        <Bestsellers />
                        <Categories />
                        <Brands />
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};
