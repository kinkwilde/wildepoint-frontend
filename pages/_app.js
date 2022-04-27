import { useEffect } from "react";

import NextHead from "next/head";
import NextRouter from "next/router";

import { DefaultSeo } from "next-seo";

import { SessionProvider } from "next-auth/react";

import { SWRConfig } from "swr";

import NProgress from "nprogress";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import "../styles/index.css";

function NextApp({ Component, pageProps: { session, ...pageProps } }) {
    // TODO (Ask if this makes any difference with regards to it's location.)
    dayjs.extend(localizedFormat);

    useEffect(() => {
        const load = () => {
            NProgress.start();
        };

        const stop = () => {
            NProgress.done();
        };

        NextRouter.events.on("routeChangeStart", () => load());
        NextRouter.events.on("routeChangeComplete", () => stop());
        NextRouter.events.on("routeChangeError", () => stop());
    });

    const getLayout = Component.getLayout || ((page) => page);

    return (
        <SessionProvider session={session}>
            <SWRConfig
                value={{
                    revalidateIfStale: false,
                    revalidateOnFocus: false,
                    revalidateOnReconnect: false,
                    fetcher: (resource, init) =>
                        fetch(resource, init).then((response) =>
                            response.json()
                        ),
                }}
            >
                <NextHead>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </NextHead>

                <DefaultSeo
                    title="next-wildepoint"
                    description="Wildepoint"
                    openGraph={{
                        type: "website",
                        site_name: "next-wildepoint",
                    }}
                />

                {getLayout(<Component {...pageProps} />)}
            </SWRConfig>
        </SessionProvider>
    );
}

export default NextApp;
