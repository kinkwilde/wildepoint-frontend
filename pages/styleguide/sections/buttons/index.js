import { useState } from "react";

import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function SectionButtons({ name, url }) {
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
                <div className="p-2 sm:p-4 md:p-6 lg:p-12 xl:p-24">
                    <ul className="mb-0 grid list-none grid-cols-1 gap-8 pl-0 lg:grid-cols-2 lg:gap-4">
                        <li>
                            <div className="grid gap-4 lg:grid-cols-[186px_1fr]">
                                <div className="row-start-2 flex flex-col space-y-4 lg:row-start-1">
                                    <button className="primary-button w-full">
                                        Primary
                                    </button>
                                    <button className="primary-button w-full bg-blue-hover focus:ring-0 lg:hover:bg-blue-hover lg:active:bg-blue-hover">
                                        Hover
                                    </button>
                                    <button className="primary-button w-full bg-blue-active focus:ring-0 lg:hover:bg-blue-active lg:active:bg-blue-active">
                                        Active
                                    </button>
                                    <button className="primary-button w-full bg-blue-active ring-4 ring-focus lg:hover:bg-blue-active lg:active:bg-blue-active">
                                        Focus
                                    </button>
                                </div>
                                <div className="row-start-1">
                                    <h4 className="mb-1 text-lg uppercase">
                                        Primary Button
                                    </h4>
                                    <p className="mb-0">
                                        Used for all main call to actions.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="grid gap-4 lg:grid-cols-[186px_1fr]">
                                <div className="row-start-2 flex flex-col space-y-4 lg:row-start-1">
                                    <button className="secondary-button">
                                        Secondary
                                    </button>
                                    <button className="secondary-button w-full bg-grey-hover focus:ring-0 lg:hover:bg-grey-hover lg:active:bg-grey-hover">
                                        Hover
                                    </button>
                                    <button className="secondary-button w-full bg-grey-active focus:ring-0 lg:hover:bg-grey-active lg:active:bg-grey-active">
                                        Active
                                    </button>
                                    <button className="secondary-button w-full bg-grey-active ring-4 ring-focus lg:hover:bg-grey-active lg:active:bg-grey-active">
                                        Focus
                                    </button>
                                </div>
                                <div className="row-start-1">
                                    <h4 className="mb-1 text-lg uppercase">
                                        Secondary Button
                                    </h4>
                                    <p className="mb-0">
                                        Used for all main call to actions.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </section>
    );
}
