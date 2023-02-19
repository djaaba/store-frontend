import cn from "classnames";
import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = ({ className, ...props }: LayoutProps): JSX.Element => {
    return (
        <React.Fragment {...props}>
            <Header />
            <div className={styles.main}>
                <Outlet />
            </div>
            <Footer />
        </React.Fragment>
    );
};
