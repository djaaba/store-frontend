import cn from "classnames";
import React, { useLayoutEffect, useRef } from "react";

import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";

import { HeaderBottom, HeaderMiddle, HeaderTop } from "./modules";
import { slides } from "./modules/HeaderBottom/helpers/slides";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        window.onscroll = function () {
            if (window.pageYOffset < 1) {
                divRef.current!.style.display = "flex";
                return;
            }
            divRef.current!.style.display = "none";
        };
    }, []);

    return (
        <header className={cn(className, styles.header)} {...props}>
            <HeaderTop />
            <HeaderMiddle />
            <React.Fragment>
                <HeaderBottom
                    className={styles.bottom}
                    slides={slides}
                    ref={divRef}
                />
                <hr className={styles.hr} />
            </React.Fragment>
        </header>
    );
};
