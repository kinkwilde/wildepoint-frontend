import { useState, useEffect } from "react";

import NextLink from "next/link";

import { useRouter } from "next/router";

import { FiMoreVertical, FiX } from "react-icons/fi";

export default function ThemeAtomsBurger() {
    const { pathname } = useRouter();

    const [expanded, setExpanded] = useState(false);

    function mmExpand() {
        setExpanded(true);
    }

    function mmClose() {
        setExpanded(false);
    }

    useEffect(() => {
        mmClose();
    }, [pathname]);

    return (
        <>
            <div>
                <button
                    onClick={mmExpand}
                    className="group flex items-center space-x-0 rounded-lg py-2 pl-3 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    <span className="font-montserrat font-light uppercase lg:group-hover:text-red-600">
                        Open Menu
                    </span>
                    <FiMoreVertical className="text-3xl lg:group-hover:text-red-600" />
                </button>
            </div>
            {expanded && (
                <div className="fixed top-0 left-0 z-30 flex h-full w-full items-center justify-center bg-red-500">
                    <div>
                        <button onClick={mmClose} className="p-3">
                            <FiX className="text-3xl" />
                        </button>
                        <p>Menu</p>
                        <nav className="flex flex-col space-y-4">
                            <NextLink href="/">
                                <a>Homepage</a>
                            </NextLink>
                            <NextLink href="/blog">
                                <a>Blog</a>
                            </NextLink>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
