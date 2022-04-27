import { useSession, signIn } from "next-auth/react";

import useSWR from "swr";

import TemplateDefault from "../components/templates/default";

import AtomsCode from "../components/atoms/code";

export default function PageIndex({ fallback }) {
    const { data: session } = useSession();

    const { data: strapiSingle } = useSWR("/api/strapi/home", {
        fallbackData: fallback.strapiSingle,
    });

    return (
        <>
            <div className="container">
                <div className="text-center">
                    <h1>Homepage</h1>
                </div>
                <div>
                    {!session && (
                        <div className="text-center">
                            <p className="mr-2 uppercase">Not signed in</p>
                            <button
                                onClick={() => signIn()}
                                className="bg-red-300 p-4 uppercase"
                            >
                                Sign In
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {strapiSingle && <AtomsCode content={strapiSingle} />}
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
