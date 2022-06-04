import { getSession } from "next-auth/react";

import useSWR from "swr";

import TemplateDefault from "../../../components/templates/default";

import AtomsCode from "../../../components/atoms/code";

export default function PageIndex({ slug, fallback }) {
    const { data: strapiCollection } = useSWR(
        "/api/strapi/notes/collection/" + slug,
        {
            fallbackData: fallback.strapiCollection,
        }
    );

    return (
        <div className="container">
            {strapiCollection && (
                <div className="my-4 text-center">
                    {strapiCollection.notesBySlug.title && (
                        <h1>{strapiCollection.notesBySlug.title}</h1>
                    )}
                </div>
            )}
            {strapiCollection && <AtomsCode content={strapiCollection} />}
        </div>
    );
}

PageIndex.getLayout = function getLayout(page) {
    return <TemplateDefault>{page}</TemplateDefault>;
};

export async function getServerSideProps(context) {
    const paramSlug = context.params.slug;

    const strapiCollectionFetch = await fetch(
        process.env.NEXT_PUBLIC_APP_URL +
            "/api/strapi/notes/collection/" +
            paramSlug
    );

    const strapiCollectionData = await strapiCollectionFetch.json();

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
                slug: paramSlug,
                fallback: {
                    strapiCollection: strapiCollectionData,
                },
            },
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
}
