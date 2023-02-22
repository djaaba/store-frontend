import React from "react";

import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = ({
    className,
    children,
    ...props
}: LayoutProps): JSX.Element => {
    return (
        <React.Fragment {...props}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </React.Fragment>
    );
};
