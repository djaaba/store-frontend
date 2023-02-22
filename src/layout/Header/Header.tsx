import cn from "classnames";
import { useLayoutEffect, useRef } from "react";

import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";

import { HeaderBottom, HeaderMiddle, HeaderTop } from "./modules";
import { slides, navigation } from "./plug";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        window.onscroll = function () {
            if (window.pageYOffset < 1) {
                divRef.current!.style.display = "block";
                return;
            }
            divRef.current!.style.display = "none";
        };
    }, []);

    return (
        <header className={cn(className, styles.header)} {...props}>
            <HeaderTop />
            <HeaderMiddle navigation={navigation} />
            <HeaderBottom
                className={styles.bottom}
                slides={slides}
                ref={divRef}
            />
            <hr className={styles.hr} />
        </header>
    );
};
