import { useState } from "react";

import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function AtomsAccordion() {
    const [isActive, setActive] = useState(false);

    return (
        <div>
            <button
                className="font-medium flex w-full items-center justify-between rounded-lg border border-gray-200 p-5 text-left font-montserrat text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                onClick={() => setActive(!isActive)}
            >
                <div>This is FAQ</div>
                <div>{isActive ? <FiChevronUp /> : <FiChevronDown />}</div>
            </button>
            {isActive && (
                <div className="border border-transparent p-5">
                    <p className="mb-0">This is the contnt.</p>
                </div>
            )}
        </div>
    );
}
