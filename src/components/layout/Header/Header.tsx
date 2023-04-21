import cn from "classnames";
import React, { useRef } from "react";

import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";

import { HeaderBottom, HeaderMiddle, HeaderTop } from "./modules";
import { navigation } from "@/plug/Header";
import { useDispatch } from "react-redux";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    React.useEffect(() => {
        window.onscroll = function () {
            if (window.pageYOffset < 1 && divRef.current) {
                divRef.current.style.display = "block";
                return;
            }
            if (window.pageYOffset > 1 && divRef.current) {
                divRef.current.style.display = "none";
                return;
            }
        };
    }, []);

    return (
        <header className={cn(className, styles.header)} {...props}>
            <HeaderTop />
            <HeaderMiddle navigation={navigation} />
            <HeaderBottom
                className={styles.bottom}
                ref={divRef}
            />
            <hr className={styles.hr} />
        </header>
    );
};
