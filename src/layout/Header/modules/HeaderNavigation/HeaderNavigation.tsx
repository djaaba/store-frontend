import cn from "classnames";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./HeaderNavigation.module.css";
import { HeaderNavigationProps } from "./HeaderNavigation.props";

import { INav } from "../../../../shared";
import { getId } from "../../../../utils";
import { Ptag, SmoothText } from "../../../../components/UI";

export const HeaderNavigation = ({
    navLinks,
    ...props
}: HeaderNavigationProps): JSX.Element => {
    return (
        <>
            <nav {...props} className={cn(styles.nav, styles.mobile)}>
                {navLinks.map((obj: INav) => (
                    <Link key={getId()} href={obj.link}>
                        <SmoothText color="gray" className={styles.tab}>
                            <FontAwesomeIcon icon={obj.icon} />
                            <Ptag className={styles.hihe}>{obj.text}</Ptag>
                        </SmoothText>
                    </Link>
                ))}
            </nav>
        </>
    );
};
