import cn from "classnames";
import Link from "next/link";

import { HeaderTopProps } from "./HeaderTop.props";
import styles from "./HeaderTop.module.css";

import {
    CompassIcon,
    PhoneIcon,
    Ptag,
    SmoothText,
    FontAwesomeIcon
} from "@/components/UI";
import { MAIN_ROUTE } from "@/utils";

export const HeaderTop = ({ ...props }: HeaderTopProps): JSX.Element => {
    return (
        <section {...props} className={styles.wrapper}>
            <div className={cn(styles.top, "wrapper")}>
                <Link className={styles.nav} href={MAIN_ROUTE}>
                    <SmoothText color="white" className={styles.iconWithText}>
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={CompassIcon}
                        />
                        <Ptag className={styles.mobile}>
                            Ростов-на-Дону
                        </Ptag>
                    </SmoothText>
                </Link>
                <SmoothText color="white" className={cn(styles.iconWithText, styles.nav)}>
                    <FontAwesomeIcon
                        className={styles.icon}
                        icon={PhoneIcon}
                    />
                    <Ptag className={styles.mobile}>8-800-600-7775</Ptag>
                </SmoothText>
            </div>
        </section>
    );
};
