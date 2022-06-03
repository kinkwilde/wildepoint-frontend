import SectionsColors from "./sections/colors";
import SectionsButtons from "./sections/buttons";
import SectionsIcons from "./sections/icons";
import SectionTypography from "./sections/typography";

import TemplatesStyle from "../../components/templates/style";

const navigationData = [
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
            <div
                className="border-b border-gray-200 bg-gray-200 p-2 sm:p-4 md:p-6 lg:p-12 xl:p-24"
                id="scrolltop"
            >
                <h1>Styleguide</h1>
                <p className="mb-0">
                    Intro text to the styleguide and purpose.
                </p>
            </div>
            <section className="border-t border-b border-gray-200" id="logo">
                <h4>Logo Usage</h4>
                <p>
                    Sizing, colors and placement. Includes what to do and what
                    not to do.
                </p>
            </section>
            <SectionsColors
                name={navigationData[0].name}
                url={navigationData[0].url}
            />
            <SectionTypography
                name={navigationData[1].name}
                url={navigationData[1].url}
            />
            <SectionsButtons
                name={navigationData[2].name}
                url={navigationData[2].url}
            />
            <SectionsIcons
                name={navigationData[3].name}
                url={navigationData[3].url}
            />
        </>
    );
}

PagesStyle.getLayout = function getLayout(page) {
    return <TemplatesStyle navigation={navigationData}>{page}</TemplatesStyle>;
};
