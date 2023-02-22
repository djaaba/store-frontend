import styles from "./Brands.module.css";
import { BrandsProps } from "./Brands.props";

import { getId, cutArray } from "../../../utils";
import { Image, Htag } from "../../UI";
import { IBrand } from "../../../shared";
import { Scroll } from "../";

export const Brands = ({ brands, ...props }: BrandsProps): JSX.Element => {
    const items = cutArray(brands);

    return (
        <section {...props} className={styles.container}>
            <Htag tag="h1">Популярные бренды</Htag>
            <Scroll>
                {brands.length > 10
                    ? items.map((column: any, i: number) => (
                          <div key={i} className={styles.content}>
                              {column.map((item: IBrand, j: number) => (
                                  <Image
                                      key={j}
                                      className={styles.img}
                                      alt={`Лого бренда ${item.name}`}
                                      imgUrl={item.imgUrl}
                                  />
                              ))}
                          </div>
                      ))
                    : brands.map((item: IBrand, i: number) => (
                          <div key={i} className={styles.content}>
                              <Image
                                  className={styles.img}
                                  alt={`Лого бренда ${item.name}`}
                                  imgUrl={item.imgUrl}
                              />
                          </div>
                      ))}
            </Scroll>
        </section>
    );
};
