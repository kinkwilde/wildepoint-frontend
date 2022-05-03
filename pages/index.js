import NextImage from "next/image";

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
            <div className="text-center">
                <h1 className="uppercase">I am Wilde.</h1>
                <p>
                    Royston 'KINK' Wilde was born out of desire. The
                    illegitimate love child of London life and the Internet.
                </p>
                <p>
                    A passion that began steeped in the fashion industry, slowly
                    taking to a more dirty, sexier side until the two became
                    one. Influenced heavily by london culture, the gaming world
                    and pornography, KINK has found himself smack bang in the
                    middle of a renaissance. He is the delectable fusion of
                    future- funk and leather, shaken aggressively in a bottle
                    for decades, just waiting for the top to explode.
                </p>
                <p className="text-xl font-bold">
                    "The question ain't who's going to let me, it's who's gonna
                    stop me?... Who?" - MK1
                </p>
                <p>
                    KINK has been playing video games since as far back as he
                    can remember. Age 8 or 9, he had started to play game such
                    as Gobliiins, Monkey Island, Tomb Raider, Doom and Quake. By
                    age 10, he was playing Unreal Tournament, Grim Fandango,
                    Myst, Riven, and everyones favourite Counter-Strike.
                </p>
                <div className="flex justify-center space-x-8">
                    <button className="bg-red-500 p-4">Request Access</button>
                    <button
                        className="bg-gray-200 p-4"
                        onClick={() => signIn()}
                    >
                        Login
                    </button>
                </div>
            </div>
            {/* <div className="my-2 md:my-8">
                <NextImage
                    src={
                        strapiSingle.index.data.attributes.content[0].image.data
                            .attributes.url
                    }
                    alt={
                        strapiSingle.index.data.attributes.content[0].image.data
                            .attributes.alternativeText
                    }
                    height={
                        strapiSingle.index.data.attributes.content[0].image.data
                            .attributes.height
                    }
                    width={
                        strapiSingle.index.data.attributes.content[0].image.data
                            .attributes.width
                    }
                    layout="responsive"
                />
            </div> */}
            {strapiSingle && (
                <div>
                    <AtomsCode content={strapiSingle} />
                </div>
            )}
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
