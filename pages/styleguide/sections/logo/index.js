import { useState } from "react";

import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function SectionLogo({ name, url }) {
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
                    <p>Logo Useage</p>
                </div>
            )}
        </section>
    );
}
