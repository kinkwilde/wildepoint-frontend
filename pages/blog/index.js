import NextLink from "next/link";

import { getSession } from "next-auth/react";

import useSWR from "swr";

import TemplateDefault from "../../components/templates/default";

import AtomsCode from "../../components/atoms/code";

export default function PageIndex({ fallback }) {
    const { data: strapiSingle } = useSWR("/api/strapi/notes/single", {
        fallbackData: fallback.strapiSingle,
    });

    const { data: strapiCollections } = useSWR(
        "/api/strapi/notes/collections",
        {
            fallbackData: fallback.strapiCollections,
        }
    );

    return (
        <div className="container">
            {strapiSingle && (
                <div className="my-4 text-center">
                    {strapiSingle.notesSingle.title && (
                        <h1>{strapiSingle.notesSingle.title}</h1>
                    )}
                </div>
            )}
            {strapiCollections && (
                <ul>
                    {strapiCollections.notesCollections.map((item) => (
                        <li key={item.id}>
                            <NextLink href={`/blog/${item.slug}`}>
                                <a className="no-underline">{item.title}</a>
                            </NextLink>
                        </li>
                    ))}
                </ul>
            )}
            {strapiSingle && <AtomsCode content={strapiSingle} />}
            {strapiCollections && <AtomsCode content={strapiCollections} />}
        </div>
    );
}

PageIndex.getLayout = function getLayout(page) {
    return <TemplateDefault>{page}</TemplateDefault>;
};

export async function getServerSideProps(context) {
    const strapiSingleFetch = await fetch(
        process.env.NEXT_PUBLIC_APP_URL + "/api/strapi/notes/single"
    );

    const strapiSingleData = await strapiSingleFetch.json();

    const strapiCollectionsFetch = await fetch(
        process.env.NEXT_PUBLIC_APP_URL + "/api/strapi/notes/collections"
    );

    const strapiCollectionsData = await strapiCollectionsFetch.json();

    if (!(await getSession(context))) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    try {
        return {
            props: {
                fallback: {
                    strapiSingle: strapiSingleData,
                    strapiCollections: strapiCollectionsData,
                },
            },
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
}
