import { FiGithub, FiDatabase } from "react-icons/fi";

import ThemeAtomsBurger from "../../../organisms/burger";

export default function ThemeOrganismsHeaderSplash() {
    return (
        <>
            <header className="mb-8 flex justify-between md:mb-12 lg:mb-24">
                <nav className="flex space-x-1 sm:space-x-3">
                    <a
                        className="group flex items-center space-x-2 rounded-lg p-2 font-montserrat no-underline focus:outline-none focus:ring-4 focus:ring-blue-300"
                        href="https://github.com/kinkwilde/wildepoint-frontend"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiGithub className="text-2xl lg:group-hover:text-red-600" />
                        <span className="hidden text-sm sm:inline lg:group-hover:text-red-600">
                            Frontend
                        </span>
                    </a>
                    <a
                        className="group flex items-center space-x-2 rounded-lg p-2 font-montserrat no-underline focus:outline-none focus:ring-4 focus:ring-blue-300"
                        href="https://github.com/kinkwilde/wildepoint-backend"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiDatabase className="text-2xl lg:group-hover:text-red-600" />
                        <span className="hidden text-sm sm:inline lg:group-hover:text-red-600">
                            Backend
                        </span>
                    </a>
                </nav>
                <ThemeAtomsBurger />
            </header>
        </>
    );
}
