import SectionsColors from "./sections/colors";
import SectionsButtons from "./sections/buttons";
import SectionsIcons from "./sections/icons";

import TemplatesStyle from "../../components/templates/style";

export default function PagesStyle() {
    return (
        <>
            <div>
                <h1>Styleguide</h1>
                <p>Intro text to the styleguide and purpose.</p>
            </div>

            <section className="border-t border-b border-gray-200">
                <h4>Logo Usage</h4>
                <p>Sizing, colors and placement. Includes what to do and what not to do.</p>
            </section>

            <SectionsColors />

            <section className="border-t border-b border-gray-200">
                <h4>Typography</h4>
            </section>

            <SectionsButtons />

            <SectionsIcons />
        </>
    );
}

PagesStyle.getLayout = function getLayout(page) {
    return <TemplatesStyle>{page}</TemplatesStyle>;
};
