import IconsSpinner from "../../../../icons/spinner";
import IconsSkribbl from "../../../../icons/skribbl";

export default function SectionColors() {
    return (
        <section className="border-t border-b border-gray-200">
            <div className="grid grid-cols-8">
                <IconsSpinner />
                <IconsSkribbl />
            </div>
        </section>
    );
}
