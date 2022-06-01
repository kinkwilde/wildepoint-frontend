const Color = require("color");

const darken = (clr, val) => Color(clr).darken(val).rgb().string();
const rotate = (clr, val) => Color(clr).rotate(val).rgb().string();

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
                blue: {
                    DEFAULT: data.colors.primary[0].hex,
                    hover: darken(data.colors.primary[0].hex, 0.15),
                    active: darken(data.colors.primary[0].hex, 0.3),
                    focus: rotate(data.colors.primary[0].hex, 90),
                },
                grey: {
                    DEFAULT: data.colors.secondary[0].hex,
                    hover: darken(data.colors.secondary[0].hex, 0.05),
                    active: darken(data.colors.secondary[0].hex, 0.1),
                    focus: rotate(data.colors.secondary[0].hex, 90),
                },
            },
        },
    },
    plugins: [],
};
