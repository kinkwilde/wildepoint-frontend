import NextImage from "next/image";

import useSWR from "swr";

import TemplateDefault from "../components/templates/default";

import AtomsCode from "../components/atoms/code";

export default function PageIndex({ fallback }) {
    const { data: strapiSingle } = useSWR("/api/strapi/home", {
        fallbackData: fallback.strapiSingle,
    });

    return (
        <>
            <div className="container">
                <div className="my-2 md:my-8">
                    <NextImage
                        src={
                            process.env.NEXT_PUBLIC_STRAPI_URL +
                            strapiSingle.index.data.attributes.content[0].image
                                .data.attributes.url
                        }
                        alt={
                            strapiSingle.index.data.attributes.content[0].image
                                .data.attributes.alternativeText
                        }
                        height={
                            strapiSingle.index.data.attributes.content[0].image
                                .data.attributes.height
                        }
                        width={
                            strapiSingle.index.data.attributes.content[0].image
                                .data.attributes.width
                        }
                        layout="responsive"
                    />
                </div>
                {strapiSingle && <AtomsCode content={strapiSingle} />}
            </div>
        </>
    );
}

PageIndex.getLayout = function getLayout(page) {
    return <TemplateDefault>{page}</TemplateDefault>;
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
