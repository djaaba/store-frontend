import React from "react";

import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { getStore } from "@/api";
import { IStoreInfo } from "@/shared";
import { initialStore } from "@/plug";

export const Layout = ({
    children,
    style,
    ...props
}: LayoutProps): JSX.Element => {
    const [data, setData] = React.useState<IStoreInfo>(initialStore);
    
    React.useEffect(() => {
        getStore().then((data: IStoreInfo) => setData(data))
    }, [])

    return (
        <div style={style}>
            <Header data={data}/>
            <main className={styles.main}>{children}</main>
            <Footer data={data}/>
        </div>
    );
};
