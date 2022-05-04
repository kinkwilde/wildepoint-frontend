import { FiGithub } from "react-icons/fi";

import ThemeAtomsBurger from "../../../atoms/burger";

export default function ThemeOrganismsHeaderSplash() {
    return (
        <>
            <header className="mb-8 md:mb-12 lg:mb-24">
                <div className="flex justify-between">
                    <div>
                        <nav className="flex space-x-1 sm:space-x-3">
                            <a
                                className="flex items-center space-x-2 p-2 font-montserrat no-underline"
                                href="https://github.com/kinkwilde/wildepoint-frontend"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiGithub className="text-2xl" />
                                <span className="hidden sm:inline">
                                    Frontend
                                </span>
                            </a>
                            <a
                                className="flex items-center space-x-2 p-2 font-montserrat no-underline"
                                href="https://github.com/kinkwilde/wildepoint-backend"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiGithub className="text-2xl" />
                                <span className="hidden sm:inline">
                                    Backend
                                </span>
                            </a>
                        </nav>
                    </div>
                    <div>
                        <ThemeAtomsBurger />
                    </div>
                </div>
            </header>
        </>
    );
}
