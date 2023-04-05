import React from "react";

import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = ({
    children,
    style,
    ...props
}: LayoutProps): JSX.Element => {
    return (
        <div style={style}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};
