const Color = require("color");

const darkenColor = (clr, val) => Color(clr).darken(val).hex();
const lightenColor = (clr, val) => Color(clr).lighten(val).hex();

const data = require("./data/style/content.json");

module.exports = {
    darkMode: "class",
    content: ["./components/**/*.js", "./icons/**/*.js", "./pages/**/*.js"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "0",
                sm: "1rem",
                md: "1.5rem",
                lg: "3rem",
                xl: "6rem",
            },
        },
        fontFamily: {
            body: data.fontFamily.body,
            mono: data.fontFamily.mono,
            title: data.fontFamily.title,
        },
        fontWeight: {
            light: 300,
            normal: 400,
            bold: 700,
            black: 900,
        },
        extend: {
            colors: {
                current: "currentColor",
                inherit: "inherit",
                transparent: "transparent",
                black: data.colors.black,
                white: data.colors.white,
                focus: data.colors.primary[0].hex,
                highlight: lightenColor(data.colors.primary[0].hex, 0.25),
                blue: {
                    DEFAULT: data.colors.primary[0].hex,
                    hover: darkenColor(data.colors.primary[0].hex, 0.15),
                    active: darkenColor(data.colors.primary[0].hex, 0.3),
                },
                red: {
                    DEFAULT: data.colors.primary[1].hex,
                    hover: darkenColor(data.colors.primary[1].hex, 0.15),
                    active: darkenColor(data.colors.primary[1].hex, 0.3),
                },
                grey: {
                    DEFAULT: data.colors.secondary[0].hex,
                    hover: darkenColor(data.colors.secondary[0].hex, 0.05),
                    active: darkenColor(data.colors.secondary[0].hex, 0.1),
                },
            },
            zIndex: {
                5: "5",
                15: "15",
                25: "25",
                35: "35",
                45: "45",
            },
        },
    },
    plugins: [],
};
