import { NextSeo } from "next-seo";

import { getSession } from "next-auth/react";

import TemplatesKW from "../../components/templates/kw";

export default function PagesKW() {
    return (
        <>
            <NextSeo
                title="title"
                description="description"
                canonical="https://wildepoint.com/styleguide"
                noindex="false"
                nofollow="false"
                openGraph={{
                    url: "https://wildepoint.com/styleguide",
                    title: "title",
                    description: "description",
                }}
            />
            <div>
                Hello World
            </div>
        </>
    );
}

PagesKW.getLayout = function getLayout(page) {
    return <TemplatesKW>{page}</TemplatesKW>;
};


export async function getServerSideProps(context) {
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
            },
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
}
