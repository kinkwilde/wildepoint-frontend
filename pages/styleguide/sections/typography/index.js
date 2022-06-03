import { useState } from "react";

import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import data from "../../../../data/style/content.json";

export default function SectionTypography({ name, url }) {
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
                    <div>
                        <div className="mb-8 border-b border-gray-200 pb-8">
                            <h2 className="mb-4 font-title text-8xl">Title</h2>
                            <p className="mb-4 font-title text-lg font-bold">
                                {data.fontFamily.title.map((item) => (
                                    <span
                                        key={item}
                                        className="after:content-[',_'] last:after:content-none"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </p>
                            <p className="mb-0 font-title">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut maximus aliquam enim, a
                                tincidunt mauris. Nullam risus nisl, commodo ut
                                lorem nec, viverra sollicitudin dolor.
                            </p>
                        </div>
                        <div className="mb-8 border-b border-gray-200 pb-8">
                            <h2 className="mb-4 font-body text-8xl">Body</h2>
                            <p className="mb-4 font-body text-lg font-bold">
                                {data.fontFamily.body.map((item) => (
                                    <span
                                        key={item}
                                        className="after:content-[',_'] last:after:content-none"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </p>
                            <p className="mb-0 font-body">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut maximus aliquam enim, a
                                tincidunt mauris. Nullam risus nisl, commodo ut
                                lorem nec, viverra sollicitudin dolor.
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-4 font-mono text-8xl">Mono</h2>
                            <p className="mb-4 font-mono text-lg font-bold">
                                {data.fontFamily.mono.map((item) => (
                                    <span
                                        key={item}
                                        className="after:content-[',_'] last:after:content-none"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </p>
                            <p className="mb-0 font-mono">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut maximus aliquam enim, a
                                tincidunt mauris. Nullam risus nisl, commodo ut
                                lorem nec, viverra sollicitudin dolor.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col divide-y divide-gray-200">
                        <div className="grid grid-cols-5 items-center divide-x border-t border-gray-200 font-title text-base font-normal leading-tight">
                            <span className="p-4">Tag</span>
                            <span className="col-span-3 p-4">Size</span>
                            <span className="p-4 text-center">Colors</span>
                        </div>
                        <div className="grid grid-cols-5 items-center gap-4 py-4 font-title text-6xl font-bold uppercase leading-tight">
                            <span>H1</span>
                            <span className="col-span-3">text-6xl</span>
                            <span className="flex justify-center space-x-2">
                                <span className="block h-5 w-5 rounded-full border border-gray-200 bg-black"></span>
                                <span className="block h-5 w-5 rounded-full border border-gray-200 bg-white"></span>
                            </span>
                        </div>
                        <div className="grid grid-cols-5 items-center gap-4 py-4 font-title text-5xl font-bold uppercase leading-tight">
                            <span>H2</span>
                            <span className="col-span-3">text-5xl</span>
                            <span className="flex justify-center space-x-2">
                                <span className="block h-5 w-5 rounded-full border border-gray-200 bg-black"></span>
                                <span className="block h-5 w-5 rounded-full border border-gray-200 bg-white"></span>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
