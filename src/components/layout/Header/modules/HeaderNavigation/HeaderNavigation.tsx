import cn from "classnames";
import Link from "next/link";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./HeaderNavigation.module.css";
import { HeaderNavigationProps } from "./HeaderNavigation.props";

import { INav } from "@/shared";
import { getId, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE } from "@/utils";
import { Ptag, SmoothText, UserIcon } from "@/components/UI";
import { selectUser } from "@/store/user/selector";

const usr = { link: LOGIN_ROUTE, icon: UserIcon, text: "Войти" }

export const HeaderNavigation = ({
    navLinks,
    ...props
}: HeaderNavigationProps): JSX.Element => {
    // const dispatch = useDispatch();
    const user = useSelector(selectUser)

    return (
        <>
            <nav {...props} className={cn(styles.nav, styles.mobile)}>
                {
                    user.isAuth ?
                        <Link href={PROFILE_ROUTE}>
                            <SmoothText color="gray" className={styles.tab}>
                                <FontAwesomeIcon icon={usr.icon} />
                                <Ptag className={styles.hihe}>{user._user.name}</Ptag>
                            </SmoothText>
                        </Link>
                        :
                        <Link href={LOGIN_ROUTE}>
                            <SmoothText color="gray" className={styles.tab}>
                                <FontAwesomeIcon icon={usr.icon} />
                                <Ptag className={styles.hihe}>{usr.text}</Ptag>
                            </SmoothText>
                        </Link>
                }
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
