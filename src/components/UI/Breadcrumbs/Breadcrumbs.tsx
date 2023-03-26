import styles from "./Breadcrumbs.module.css";
import { BreadcrumbsProps } from "./Breadcrumbs.props";

import { IBreadcrumb } from "@/shared";

export const Breadcrumbs = ({ list }: BreadcrumbsProps): JSX.Element => {
    return (
        <ul className={styles.body}>
            {list.map((item: IBreadcrumb) => (
                <li className={item.active ? styles.active : ""} key={item.id}>
                    <a href={item.href} title={item.name}>
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};
