import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import "regenerator-runtime/runtime";

import "@fontsource/roboto/500.css";
import "@fontsource/roboto";
import "normalize.css";
import "@/styles/globals.css";

import { rootStore } from "@/store/rootStore";
import { Layout } from "@/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <React.StrictMode>
                {/* <NextNProgress
                    color="var(--red)"
                    options={{
                        trickleSpeed: 50,
                        showSpinner: false,
                        speed: 300,
                    }}
                    // showAfterMs={300}
                /> */}
                <Provider store={rootStore}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </React.StrictMode>
        </>
    );
}
