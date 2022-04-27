import { useState } from "react";

import NextLink from "next/link";

import { useSession, signOut } from "next-auth/react";

import {
    FiChevronDown,
    FiInstagram,
    FiLogOut,
    FiMenu,
    FiSearch,
    FiTwitch,
    FiTwitter,
    FiX,
} from "react-icons/fi";

import ThemeAtomsLogo from "../../atoms/logo";

export default function ThemeOrganismsHeader() {
    const { data: session } = useSession();

    const [expanded, setExpanded] = useState(false);

    function mmExpand() {
        setExpanded(true);
    }

    function mmClose() {
        setExpanded(false);
    }

    return (
        <>
            <div className="border-b border-gray-200">
                <div className="container">
                    <div className="mb-2 sm:grid sm:grid-cols-2 sm:items-center">
                        <div className="flex justify-center sm:justify-start">
                            <ThemeAtomsLogo />
                        </div>
                        <div className="flex h-full justify-center sm:place-content-end">
                            <div className="flex space-x-1">
                                {session && (
                                    <>
                                        <button
                                            onClick={() => signOut()}
                                            className="p-3"
                                        >
                                            <FiLogOut className="text-3xl" />
                                        </button>
                                    </>
                                )}
                                <button onClick={mmExpand} className="p-3">
                                    <FiMenu className="text-3xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                        <div className="hidden md:block">
                            <nav>
                                <ul className="mb-0 inline-flex list-none space-x-2 pl-0">
                                    <li>
                                        <NextLink href="/">
                                            <a className="flex p-3 uppercase no-underline hover:text-gray-500">
                                                Home
                                            </a>
                                        </NextLink>
                                    </li>
                                    {session && (
                                        <>
                                            <li className="group hover:bg-black">
                                                <NextLink href="/blog">
                                                    <a className="flex items-center space-x-2 p-3 uppercase no-underline group-hover:text-white">
                                                        <span>Blog</span>
                                                        <FiChevronDown className="mt-px" />
                                                    </a>
                                                </NextLink>
                                            </li>
                                            <li>
                                                <NextLink href="/">
                                                    <a className="flex p-3 uppercase no-underline hover:text-gray-500">
                                                        Diary
                                                    </a>
                                                </NextLink>
                                            </li>
                                        </>
                                    )}
                                    <li>
                                        <NextLink href="/">
                                            <a className="flex p-3 uppercase no-underline hover:text-gray-500">
                                                Contact
                                            </a>
                                        </NextLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-span-2 flex h-full place-content-center items-center md:col-span-1 md:place-content-end">
                            <nav className="flex space-x-1">
                                <NextLink href="/">
                                    <a className="p-3">
                                        <FiTwitter />
                                    </a>
                                </NextLink>
                                <NextLink href="/">
                                    <a className="p-3">
                                        <FiInstagram />
                                    </a>
                                </NextLink>
                                <NextLink href="/">
                                    <a className="p-3">
                                        <FiTwitch />
                                    </a>
                                </NextLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {expanded && (
                <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-red-500">
                    <div>
                        <button onClick={mmClose} className="p-3">
                            <FiX className="text-3xl" />
                        </button>
                        <p>Menu</p>
                    </div>
                </div>
            )}
        </>
    );
}
