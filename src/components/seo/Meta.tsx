import Head from "next/head";

import { IMeta } from "@/shared";

export const Meta = ({ title, description }: IMeta): JSX.Element => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/logo.svg" />
            {description ?
                <>
                    <meta name='description' content={description} />
                    <meta name="og:title" content={title} />
                    <meta name="og:description" content={description} />
                </>
                :
                <>
                    <meta name='robots' content='noindex, nofollow' />
                </>
            }
        </Head>
    );
};