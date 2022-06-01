import { FiGithub } from "react-icons/fi";

import TemplateIndex from "../components/templates/index";

export default function PageBackend() {
    return (
        <>
            <div className="mx-auto mb-12 max-w-prose text-center">
                <h1>Backend Information</h1>
                <p className="text-lg">This will be coming soon.</p>
                <p>This will be coming soon.</p>
                <a
                    className="group flex items-center space-x-2 rounded-lg p-2 font-title no-underline focus:outline-none focus:ring-4 focus:ring-blue-300"
                    href="https://github.com/kinkwilde/wildepoint-backend"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FiGithub className="text-2xl lg:group-hover:text-red-600" />
                    <span className="hidden text-sm sm:inline lg:group-hover:text-red-600">
                        Backend
                    </span>
                </a>
            </div>
        </>
    );
}

PageBackend.getLayout = function getLayout(page) {
    return <TemplateIndex>{page}</TemplateIndex>;
};
