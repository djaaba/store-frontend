import cn from "classnames";

import styles from "./Main.module.css";
import { MainProps } from "./Main.props";

import {
    Bestsellers,
    Brands,
    Categories,
    Banner,
    TopProduct,
} from "../../components/modules";
import { banners } from "../../layout/plug/banners";
import { topProduct, bestsellers, brands, categories } from "../../stubs";

export const Main = ({ className, ...props }: MainProps): JSX.Element => {
    return (
        <main {...props}>
            <div className="wrapper">
                <div className={styles.sliders}>
                    <Banner banners={banners} />
                    <TopProduct items={topProduct} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={cn(styles.fixPadding, "wrapper")}>
                    <Bestsellers items={bestsellers} />
                    <Categories categories={categories}/>
                    <Brands brands={brands} />
                </div>
            </div>
        </main>
    );
};
