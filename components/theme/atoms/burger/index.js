import { useState } from "react";

import NextLink from "next/link";

import { FiMenu, FiX } from "react-icons/fi";

export default function ThemeAtomsBurger() {
    const [expanded, setExpanded] = useState(false);

    function mmExpand() {
        setExpanded(true);
    }

    function mmClose() {
        setExpanded(false);
    }

    return (
        <>
            <div>
                <button
                    onClick={mmExpand}
                    className="flex items-center space-x-2"
                >
                    <span className="text-sm uppercase">Open Menu</span>
                    <FiMenu className="text-3xl" />
                </button>
            </div>
            {expanded && (
                <div className="fixed top-0 left-0 z-30 flex h-full w-full items-center justify-center bg-red-500">
                    <div>
                        <button onClick={mmClose} className="p-3">
                            <FiX className="text-3xl" />
                        </button>
                        <p>Menu</p>
                        <NextLink href="/">
                            <a>Homepage</a>
                        </NextLink>
                    </div>
                </div>
            )}
        </>
    );
}
