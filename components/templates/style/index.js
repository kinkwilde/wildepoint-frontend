import NextLink from "next/link";

import { FiArrowUp } from "react-icons/fi";

import AtomsTheme from "../../atoms/theme";

export default function TemplatesStyle({ children, navigation }) {
    return (
        <div className="relative grid h-screen grid-cols-[auto_1fr]">
            <div className="h-full border-r border-gray-200 bg-white p-2 dark:border-gray-700 dark:bg-gray-900 sm:p-4 md:p-6 lg:p-12 xl:p-24">
                <div className="w-64">
                    <AtomsTheme />
                    <ul>
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <NextLink href={`#${item.url}`} scroll={false}>
                                    <a>{item.name}</a>
                                </NextLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="overflow-y-scroll bg-gray-50 dark:bg-gray-800">
                <div className="relative">
                    <div className="flex min-h-screen flex-col">
                        <main className="grow">{children}</main>
                    </div>
                    <NextLink href="#scrolltop" scroll={false}>
                        <a className="fixed right-16 bottom-12 z-20 flex items-center space-x-1 rounded-full bg-red px-4 py-2 text-white no-underline">
                            <span className="font-title font-bold uppercase">
                                Top
                            </span>
                            <FiArrowUp />
                        </a>
                    </NextLink>
                </div>
            </div>
        </div>
    );
}
