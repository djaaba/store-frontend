import { useState } from "react";
import Link from "next/link";
import cn from "classnames";

import styles from "./FooterNavigation.module.css";
import { FooterNavigationProps } from "./FooterNavigation.props";

import { getId, scroll } from "../../../../utils";
import { IColumnItem } from "../../../../shared";
import { aboutCompany, buyers, forBusiness } from "@/plug/Footer";

export const FooterNavigation = ({
    ...props
}: FooterNavigationProps): JSX.Element => {
    const data: Array<IColumnItem> = [buyers, forBusiness, aboutCompany];
    const [openedItem, setOpenedItem] = useState<String>("");

    return (
        <>
            <div {...props} className={styles.content}>
                {data.map((item) => (
                    <li className={styles.elem} key={getId()}>
                        <div
                            onClick={() =>
                                openedItem === item.title
                                    ? setOpenedItem("")
                                    : setOpenedItem(item.title)
                            }
                            className={styles.accordionTitle}
                        >
                            <p className={styles.title}>{item.title}</p>
                            <div
                                className={cn(
                                    styles.mobile,
                                    openedItem === item.title ? "up" : "down"
                                )}
                            >
                                <i />
                            </div>
                        </div>
                        <div className={styles.mobile}>
                            {openedItem === item.title && (
                                <div>
                                    {item.links.map((obj) => (
                                        <li key={getId()} className={styles.li}>
                                            <Link
                                                href={obj.href}
                                                className={styles.link}
                                                aria-label={`Узнать подробнее о ${obj.name}`}
                                            >
                                                {obj.name}
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                            )}
                        </div>
                        <ul className={cn(styles.ul, styles.desk)}>
                            {item.links.map((obj) => (
                                <li key={getId()} className={styles.li}>
                                    <Link
                                        href={obj.href}
                                        className={styles.link}
                                        onClick={() => scroll()}
                                        aria-label={`Узнать подробнее о ${obj.name}`}
                                    >
                                        {obj.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </div>
        </>
    );
};