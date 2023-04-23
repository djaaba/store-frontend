import React from "react";
import type { AppProps } from "next/app";
import { Roboto } from '@next/font/google';
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import "regenerator-runtime/runtime";
import { ToastContainer } from "react-toastify";

import "normalize.css";
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

import { rootStore } from "@/store/rootStore";
import { Layout } from "@/components/layout/Layout";

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

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
                    <Layout style={roboto.style}>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
                <ToastContainer />
            </React.StrictMode>
        </>
    );
}
