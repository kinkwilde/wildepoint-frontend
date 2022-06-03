import { useEffect } from "react";

import NextHead from "next/head";
import NextRouter from "next/router";
import NextScript from "next/script";

import { DefaultSeo } from "next-seo";

import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "next-themes";

import { SWRConfig } from "swr";

import NProgress from "nprogress";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import * as ga from "../helpers/gtag";

import "../styles/index.css";

import styleConfig from "../data/style/config.json";

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

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url);
        };

        NextRouter.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            NextRouter.events.off("routeChangeComplete", handleRouteChange);
        };
    }, []);

    return (
        <SessionProvider session={session}>
            <ThemeProvider enableSystem={true} attribute="class">
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
                        title="next-app"
                        description="next-app"
                        openGraph={{
                            type: "website",
                            site_name: process.env.NEXT_PUBLIC_SCHEMA_SITE_NAME,
                        }}
                        additionalMetaTags={[
                            {
                                name: "application-name",
                                content:
                                    process.env.NEXT_PUBLIC_SCHEMA_SITE_NAME,
                            },
                            {
                                name: "theme-color",
                                content: styleConfig.colors.primary[0].hex,
                            },
                            {
                                name: "apple-mobile-web-app-capable",
                                content: "yes",
                            },
                            {
                                name: "apple-mobile-web-app-status-bar-style",
                                content: "black",
                            },
                            {
                                name: "msapplication-config",
                                content: "/browserconfig.xml",
                            },
                        ]}
                        additionalLinkTags={[
                            {
                                rel: "manifest",
                                href: "/manifest.webmanifest",
                            },
                            {
                                rel: "apple-touch-icon",
                                href: "/icon-apple.png",
                            },
                        ]}
                    />

                    <NextScript
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                        strategy="afterInteractive"
                    />

                    <NextScript id="gAnalytics" strategy="afterInteractive">
                        {`
                        window.dataLayer = window.dataLayer || [];

                        function gtag() {
                            dataLayer.push(arguments);
                        }

                        gtag('js', new Date());

                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                            page_path: window.location.pathname,
                        });
                    `}
                    </NextScript>

                    {getLayout(<Component {...pageProps} />)}
                </SWRConfig>
            </ThemeProvider>
        </SessionProvider>
    );
}

export default NextApp;
