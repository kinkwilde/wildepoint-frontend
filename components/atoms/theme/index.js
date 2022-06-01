import { useTheme } from "next-themes";

import { FiSun, FiMoon } from "react-icons/fi";

export default function AtomsTheme() {
    const { systemTheme, theme, setTheme } = useTheme("light");

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
        return (
            <button
                onClick={() => setTheme("light")}
                className="flex rounded-lg p-2 focus:outline-none focus:ring-4 focus:ring-blue-focus"
            >
                <FiSun className="text-6xl" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme("dark")}
            className="flex rounded-lg p-2 focus:outline-none focus:ring-4 focus:ring-blue-focus"
        >
            <FiMoon className="text-6xl" />
        </button>
    );
}
