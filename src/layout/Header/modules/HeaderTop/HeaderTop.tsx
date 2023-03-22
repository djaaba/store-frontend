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
                <div className={styles.nav}>
                    <Link href={MAIN_ROUTE}>
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
                    <div className={cn(styles.mobile, styles.nav)}>
                        <SmoothText color="white">
                            <Ptag>Магазины</Ptag>
                        </SmoothText>
                        <SmoothText color="white">
                            <Ptag>Доставка</Ptag>
                        </SmoothText>
                    </div>
                </div>
                <div className={styles.nav}>
                    <div className={cn(styles.mobile, styles.nav)}>
                        <SmoothText color="white">
                            <Ptag>Блог «М.Клик»</Ptag>
                        </SmoothText>
                        <SmoothText color="white">
                            <Ptag>M.Club</Ptag>
                        </SmoothText>
                        {/* <Link to="/"> */}
                        <SmoothText color="white">
                            <Ptag>Для бизнеса</Ptag>
                        </SmoothText>
                        {/* </Link> */}
                    </div>
                    <SmoothText color="white" className={styles.iconWithText}>
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={PhoneIcon}
                        />
                        <Ptag className={styles.mobile}>8-800-600-7775</Ptag>
                    </SmoothText>
                </div>
            </div>
        </section>
    );
};
