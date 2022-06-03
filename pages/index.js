import NextImage from "next/image";
import NextLink from "next/link";

import { NextSeo, SocialProfileJsonLd } from "next-seo";

import { useSession } from "next-auth/react";

import useSWR from "swr";

import { FiInstagram, FiTwitter } from "react-icons/fi";

import ReactMarkdown from "react-markdown";

import TemplateIndex from "../components/templates/index";

import AtomsAccordion from "../components/atoms/accordion";
import AtomsCode from "../components/atoms/code";
import AtomsLogin from "../components/atoms/login";

export default function PageIndex({ fallback }) {
    const { data: userSession } = useSession();

    const { data: strapiSingle } = useSWR("/api/strapi/home", {
        fallbackData: fallback.strapiSingle,
    });

    return (
        <>
            <NextSeo
                title="Homepage"
                description="Description"
                canonical="https://wildepoint.com"
                openGraph={{
                    url: "https://wildepoint.com",
                    title: "Homepage",
                    description: "Description",
                }}
            />
            <SocialProfileJsonLd
                type={process.env.NEXT_PUBLIC_SCHEMA_SITE_TYPE}
                name={process.env.NEXT_PUBLIC_SCHEMA_SITE_NAME}
                url={process.env.NEXT_PUBLIC_APP_URL}
                sameAs={[
                    process.env.NEXT_PUBLIC_SOCIAL_TWITCH_URL,
                    process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL,
                ]}
            />
            {strapiSingle.index.data != null && (
                <>
                    <div className="mx-auto max-w-prose">
                        <div className="mb-8 text-center md:mb-12">
                            <h1 className="mb-4">
                                {strapiSingle.index.data.attributes.title}
                            </h1>
                            <p className="text-lg">
                                {strapiSingle.index.data.attributes.intro}
                            </p>
                        </div>
                    </div>
                    {strapiSingle.index.data.attributes.hero.image.data !=
                        null && (
                        <div className="my-12 lg:my-24">
                            <div className="relative aspect-square overflow-hidden sm:aspect-video">
                                <NextImage
                                    src={
                                        strapiSingle.index.data.attributes.hero
                                            .image.data.attributes.url
                                    }
                                    alt={
                                        strapiSingle.index.data.attributes.hero
                                            .image.data.attributes
                                            .alternativeText
                                    }
                                    layout="fill"
                                    objectFit="cover"
                                    priority="true"
                                />
                            </div>
                        </div>
                    )}
                    {strapiSingle.index.data.attributes.richtext.text !=
                        null && (
                        <div className="mx-auto max-w-prose">
                            <div className="my-12 text-center lg:my-24">
                                <ReactMarkdown>
                                    {
                                        strapiSingle.index.data.attributes
                                            .richtext.text
                                    }
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}
                </>
            )}
            <div className="my-12 lg:my-24">
                <div className="mx-auto max-w-prose">
                    <div className="mb-8 text-center">
                        <h4 className="mb-4 text-center uppercase">
                            This is where hell starts
                        </h4>
                        <p>Make your own choice in life.</p>
                    </div>
                    <div className="grid gap-y-4 sm:grid-cols-2 sm:gap-6 sm:gap-y-0 md:gap-8">
                        {!userSession && (
                            <NextLink href="/request">
                                <a
                                    className="block rounded-lg border border-blue-800 bg-blue-600 px-10 py-6 text-center font-title font-bold uppercase text-white no-underline focus:outline-none focus:ring-4 focus:ring-blue-300 lg:hover:bg-blue-800"
                                    aria-label="Request Access"
                                >
                                    Request Access
                                </a>
                            </NextLink>
                        )}
                        <AtomsLogin />
                    </div>
                    <div className="mt-12">
                        <AtomsAccordion />
                    </div>
                </div>
            </div>
            <div className="my-12 lg:my-24">
                <div className="mx-auto max-w-prose">
                    <div className="mb-8 text-center">
                        <h3 className="uppercase">Find Me On Social Media</h3>
                        <p>
                            I have a very limited social media presence, and the
                            places you can find me are listed below.
                        </p>
                    </div>
                    <nav className="flex justify-center space-x-8">
                        {process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL && (
                            <NextLink
                                href={
                                    process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL
                                }
                            >
                                <a className="text-3xl" aria-label="Instagram">
                                    <FiInstagram />
                                </a>
                            </NextLink>
                        )}
                        {process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL && (
                            <NextLink
                                href={
                                    process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL
                                }
                            >
                                <a className="text-3xl" aria-label="Twitter">
                                    <FiTwitter />
                                </a>
                            </NextLink>
                        )}
                    </nav>
                </div>
            </div>
            {strapiSingle && (
                <AtomsCode className="mt-12" content={strapiSingle} />
            )}
        </>
    );
}

PageIndex.getLayout = function getLayout(page) {
    return <TemplateIndex>{page}</TemplateIndex>;
};

export async function getServerSideProps() {
    const strapiSingleFetch = await fetch(
        process.env.NEXT_PUBLIC_APP_URL + "/api/strapi/home"
    );

    const strapiSingleData = await strapiSingleFetch.json();

    try {
        return {
            props: {
                fallback: {
                    strapiSingle: strapiSingleData,
                },
            },
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
}
