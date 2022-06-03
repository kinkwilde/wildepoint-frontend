import { useState } from "react";

import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import data from "../../../../data/style/content.json";

import AtomsColor from "../../../../components/atoms/colors";

export default function SectionColors({ name, url }) {
    const [isActive, setActive] = useState(false);

    return (
        <section className="border-t border-b border-gray-200" id={url}>
            <button
                className="flex w-full items-center justify-between bg-gray-200 p-2 text-left sm:p-4 md:p-6 lg:p-12 xl:p-24"
                onClick={() => setActive(!isActive)}
            >
                <div>
                    <h2>{name}</h2>
                    <p className="mb-0">Intro to how to use our colors.</p>
                </div>
                <div className="text-6xl">
                    {isActive ? <FiChevronUp /> : <FiChevronDown />}
                </div>
            </button>
            {isActive && (
                <div className="grid p-2 sm:p-4 md:p-6 lg:p-12 xl:p-24">
                    <div className="mb-8 border-b border-gray-200 pb-8">
                        <div className="mb-4">
                            <h3>Primary Colors</h3>
                            <p className="mb-0">
                                These are the primary colors.
                            </p>
                        </div>
                        <ul className="mb-0 grid list-none grid-cols-1 gap-4 pl-0 lg:grid-cols-2">
                            {data.colors.primary.map((item) => (
                                <li key={item.name}>
                                    <AtomsColor data={item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="mb-4">
                            <h3>Secondary Colors</h3>
                            <p className="mb-0">
                                These are the secondary colors.
                            </p>
                        </div>
                        <ul className="mb-0 grid list-none grid-cols-1 gap-4 pl-0 lg:grid-cols-2">
                            {data.colors.secondary.map((item) => (
                                <li key={item.name}>
                                    <AtomsColor data={item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}
