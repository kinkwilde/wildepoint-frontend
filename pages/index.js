import NextLink from "next/link";

import { useSession } from "next-auth/react";

import useSWR from "swr";

import ReactMarkdown from "react-markdown";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import { generateCloudURL } from "../helpers/url";

import TemplateIndex from "../components/templates/index";

import AtomsAccordion from "../components/atoms/accordion";
import AtomsCode from "../components/atoms/code";
import AtomsLogin from "../components/atoms/login";

import { FiInstagram, FiTwitch, FiTwitter } from "react-icons/fi";

export default function PageIndex({ fallback }) {
    const { data: userSession } = useSession();

    const { data: strapiSingle } = useSWR("/api/strapi/home", {
        fallbackData: fallback.strapiSingle,
    });

    const cloudinaryConnection = new Cloudinary({
        cloud: {
            cloudName: process.env.NEXT_PUBLIC_CLOUDNAME,
        },
    });

    const heroImage = cloudinaryConnection.image(
        generateCloudURL(
            strapiSingle.index.data.attributes.hero.image.data.attributes.url
        )
    );

    return (
        <>
            {strapiSingle.index.data != null && (
                <>
                    <div className="mx-auto mb-12 max-w-prose text-center">
                        <h1>{strapiSingle.index.data.attributes.title}</h1>
                        <p className="text-lg">
                            {strapiSingle.index.data.attributes.intro}
                        </p>
                    </div>
                    {strapiSingle.index.data.attributes.hero.image.data !=
                        null && (
                        <div className="mb-12">
                            <AdvancedImage cldImg={heroImage} />
                        </div>
                    )}
                    {strapiSingle.index.data.attributes.richtext.text !=
                        null && (
                        <div className="mx-auto mb-12 max-w-prose text-center">
                            <ReactMarkdown>
                                {
                                    strapiSingle.index.data.attributes.richtext
                                        .text
                                }
                            </ReactMarkdown>
                        </div>
                    )}
                </>
            )}
            <div className="my-24">
                <div className="mx-auto max-w-prose text-center">
                    <h3 className="uppercase">Find Me On Social Media</h3>
                    <p>
                        I have a very limited social media presence, and the
                        places you can find me are listed below.
                    </p>
                </div>
                <nav className="flex justify-center space-x-4">
                    <NextLink href="/">
                        <a>
                            <FiInstagram />
                        </a>
                    </NextLink>
                    <NextLink href="/">
                        <a>
                            <FiTwitch />
                        </a>
                    </NextLink>
                    <NextLink href="/">
                        <a>
                            <FiTwitter />
                        </a>
                    </NextLink>
                </nav>
            </div>
            <div className="my-24">
                <div className="mb-8 text-center">
                    <h4 className="mb-4 text-center uppercase">
                        This is where hell starts
                    </h4>
                    <p className="mb-0">Make your own choice in life.</p>
                </div>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6 md:space-x-8">
                    {!userSession && (
                        <NextLink href="/request">
                            <a className="block rounded-lg border border-blue-800 bg-blue-600 px-10 py-6 text-center font-montserrat font-bold uppercase text-white no-underline focus:outline-none focus:ring-4 focus:ring-blue-300 lg:hover:bg-blue-800">
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
