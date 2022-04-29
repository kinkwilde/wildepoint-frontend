import { useState } from "react";

import NextLink from "next/link";

import { useSession, signIn, signOut } from "next-auth/react";

import {
    FiInstagram,
    FiLogIn,
    FiLogOut,
    FiMenu,
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
            <header className="border-b border-t border-gray-500">
                <div className="container flex justify-between">
                    <div className="flex divide-x border-l border-r border-gray-500">
                        <div className="h-full border-gray-500 px-4 text-center">
                            <ThemeAtomsLogo />
                        </div>
                        <div className="hidden border-gray-500 px-4 md:block">
                            <nav className="flex h-full items-center">
                                <NextLink href="/">
                                    <a className="flex h-full items-center px-4 font-semibold uppercase no-underline hover:text-gray-500">
                                        Home
                                    </a>
                                </NextLink>
                                {session && (
                                    <>
                                        <NextLink href="/blog">
                                            <a className="flex h-full items-center px-4 font-semibold uppercase no-underline hover:text-gray-500">
                                                Blog
                                            </a>
                                        </NextLink>
                                        <NextLink href="/">
                                            <a className="flex h-full items-center px-4 font-semibold uppercase no-underline hover:text-gray-500">
                                                Diary
                                            </a>
                                        </NextLink>
                                    </>
                                )}
                                <NextLink href="/">
                                    <a className="flex h-full items-center px-4 font-semibold uppercase no-underline hover:text-gray-500">
                                        Contact
                                    </a>
                                </NextLink>
                            </nav>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex divide-x border-l border-r border-gray-500">
                            <div className="border-gray-500">
                                {!session && (
                                    <>
                                        <button
                                            onClick={() => signIn()}
                                            className="h-full p-3"
                                        >
                                            <FiLogIn className="text-3xl" />
                                        </button>
                                    </>
                                )}
                                {session && (
                                    <>
                                        <button
                                            onClick={() => signOut()}
                                            className="h-full p-3"
                                        >
                                            <FiLogOut className="text-3xl" />
                                        </button>
                                    </>
                                )}
                            </div>
                            <div className="border-gray-500">
                                <button
                                    onClick={mmExpand}
                                    className="h-full px-4"
                                >
                                    <FiMenu className="text-3xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {expanded && (
                <div className="fixed top-0 left-0 z-30 flex h-full w-full items-center justify-center bg-red-500">
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
