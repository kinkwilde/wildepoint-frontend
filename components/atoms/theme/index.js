import { useTheme } from "next-themes";

import { FiSun, FiMoon } from "react-icons/fi";

export default function AtomsTheme() {
    const { systemTheme, theme, setTheme } = useTheme("light");

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
        return (
            <button
                onClick={() => setTheme("light")}
                className="focus-ring flex rounded-lg p-2"
            >
                <FiSun className="text-6xl" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme("dark")}
            className="focus-ring flex rounded-lg p-2"
        >
            <FiMoon className="text-6xl" />
        </button>
    );
}
