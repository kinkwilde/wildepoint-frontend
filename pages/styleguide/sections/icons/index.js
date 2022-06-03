import IconsSpinner from "../../../../icons/spinner";
import IconsSkribbl from "../../../../icons/skribbl";

export default function SectionIcons({ name, url }) {
    return (
        <section className="border-t border-b border-gray-200" id={url}>
            <div>
                <h2>{name}</h2>
            </div>
            <div className="grid grid-cols-8">
                <IconsSpinner />
                <IconsSkribbl />
            </div>
        </section>
    );
}
