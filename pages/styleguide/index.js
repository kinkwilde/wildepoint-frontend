import { NextSeo } from "next-seo";

import SectionsButtons from "./sections/buttons";
import SectionsColors from "./sections/colors";
import SectionsIcons from "./sections/icons";
import SectionsLogo from "./sections/logo";
import SectionTypography from "./sections/typography";

import TemplatesStyle from "../../components/templates/style";

const seoData = {
    title: "Styleguide",
    description: "Brand style guidelines and how to use them.",
};

const navigationData = [
    {
        name: "Logo",
        url: "logo",
    },
    {
        name: "Colors",
        url: "colors",
    },
    {
        name: "Typography",
        url: "typography",
    },
    {
        name: "Buttons",
        url: "buttons",
    },
    {
        name: "Icons",
        url: "icons",
    },
];

export default function PagesStyle() {
    return (
        <>
            <NextSeo
                title={seoData.title}
                description={seoData.description}
                canonical="https://wildepoint.com/styleguide"
                openGraph={{
                    url: "https://wildepoint.com/styleguide",
                    title: seoData.title,
                    description: seoData.description,
                }}
            />
            <div
                className="border-b border-gray-200 bg-white p-2 sm:p-4 md:p-6 lg:p-12 xl:p-24"
                id="scrolltop"
            >
                <h1>Styleguide</h1>
                <p className="mb-0">
                    Intro text to the styleguide and purpose.
                </p>
            </div>
            <SectionsLogo
                name={navigationData[0].name}
                url={navigationData[0].url}
            />
            <SectionsColors
                name={navigationData[1].name}
                url={navigationData[1].url}
            />
            <SectionTypography
                name={navigationData[2].name}
                url={navigationData[2].url}
            />
            <SectionsButtons
                name={navigationData[3].name}
                url={navigationData[3].url}
            />
            <SectionsIcons
                name={navigationData[4].name}
                url={navigationData[4].url}
            />
        </>
    );
}

PagesStyle.getLayout = function getLayout(page) {
    return <TemplatesStyle navigation={navigationData}>{page}</TemplatesStyle>;
};
