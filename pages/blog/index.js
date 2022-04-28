import NextLink from "next/link";

import { getSession } from "next-auth/react";

import useSWR from "swr";

import TemplateDefault from "../../components/templates/default";

import AtomsCode from "../../components/atoms/code";

export default function PageIndex({ fallback }) {
    const { data: strapiCollections } = useSWR(
        "/api/strapi/notes/collections",
        {
            fallbackData: fallback.strapiCollections,
        }
    );

    return (
        <div className="container">
            <div className="my-4 text-center">
                <h1>Blog</h1>
            </div>
            {strapiCollections && (
                <ul>
                    {strapiCollections.notes.data.map((item) => (
                        <li key={item.id}>
                            <NextLink href={`/blog/${item.slug}`}>
                                <a className="no-underline">
                                    {item.attributes.title}
                                </a>
                            </NextLink>
                        </li>
                    ))}
                </ul>
            )}
            {strapiCollections && <AtomsCode content={strapiCollections} />}
        </div>
    );
}

PageIndex.getLayout = function getLayout(page) {
    return <TemplateDefault>{page}</TemplateDefault>;
};

export async function getServerSideProps(context) {
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
