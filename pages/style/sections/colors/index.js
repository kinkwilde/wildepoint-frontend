import data from "../../../../data/style/content.json";

import AtomsColor from "../../../../components/atoms/color";

export default function SectionColors() {
    return (
        <section className="border-t border-b border-gray-200">
            <div>
                <h2>Color Pallete</h2>
            </div>
            <div>
                <div>
                    <h3>Primary Colors</h3>
                    <p>These are the primary colors.</p>
                </div>
                <ul className="mb-0 grid list-none grid-cols-1 gap-4 pl-0 sm:grid-cols-2 lg:grid-cols-5">
                    {data.colors.primary.map((item) => (
                        <li key={item.name}>
                            <AtomsColor data={item} />
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div>
                    <h3>Secondary Colors</h3>
                    <p>These are the secondary colors.</p>
                </div>
                <ul className="mb-0 grid list-none grid-cols-5 gap-4 pl-0">
                    {data.colors.secondary.map((item) => (
                        <li key={item.name}>
                            <AtomsColor data={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
