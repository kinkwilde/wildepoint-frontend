import NextLink from "next/link";

import { useSession } from "next-auth/react";

import useSWR from "swr";

import ReactMarkdown from "react-markdown";

import TemplateIndex from "../components/templates/index";

import AtomsLogin from "../components/atoms/login";
import AtomsCode from "../components/atoms/code";

export default function PageIndex({ fallback }) {
    const { data: userSession } = useSession();

    const { data: strapiSingle } = useSWR("/api/strapi/home", {
        fallbackData: fallback.strapiSingle,
    });

    return (
        <>
            {strapiSingle.index.data != null && (
                <div className="mx-auto mb-12 max-w-prose text-center">
                    <ReactMarkdown>
                        {strapiSingle.index.data.attributes.richtext.text}
                    </ReactMarkdown>
                </div>
            )}
            <div className="my-12 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6 md:space-x-8">
                {!userSession && (
                    <NextLink href="/request">
                        <a className="block rounded-lg border border-blue-800 bg-blue-600 px-10 py-6 text-center font-montserrat font-bold uppercase text-white no-underline focus:outline-none focus:ring-4 focus:ring-blue-300 lg:hover:bg-blue-800">
                            Request Access
                        </a>
                    </NextLink>
                )}
                <AtomsLogin />
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
