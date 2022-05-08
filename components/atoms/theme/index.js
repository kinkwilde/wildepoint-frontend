import { useTheme } from "next-themes";

import { FiSun, FiMoon } from "react-icons/fi";

export default function AtomsTheme() {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
        return (
            <button
                onClick={() => setTheme("light")}
                className="flex items-center space-x-0 rounded-lg py-2 pl-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                <FiSun className="text-3xl" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme("dark")}
            className="flex items-center space-x-0 rounded-lg py-2 pl-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
            <FiMoon className="text-3xl" />
        </button>
    );
}
