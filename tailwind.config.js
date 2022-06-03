const Color = require("color");

const darkenColor = (clr, val) => Color(clr).darken(val).hex();
const lightenColor = (clr, val) => Color(clr).lighten(val).hex();

const styleConfig = require("./data/style/config.json");

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
            body: styleConfig.font.family.body,
            mono: styleConfig.font.family.mono,
            title: styleConfig.font.family.title,
        },
        fontWeight: {
            light: 300,
            normal: 400,
            bold: 700,
            black: 900,
        },
        fontSize: {
            xs: [
                styleConfig.font.sizes.xs.value,
                {
                    lineHeight: styleConfig.font.sizes.xs.lineHeight,
                },
            ],
            sm: [
                styleConfig.font.sizes.sm.value,
                {
                    lineHeight: styleConfig.font.sizes.sm.lineHeight,
                },
            ],
            base: [
                styleConfig.font.sizes.base.value,
                {
                    lineHeight: styleConfig.font.sizes.base.lineHeight,
                },
            ],
            lg: [
                styleConfig.font.sizes.lg.value,
                {
                    lineHeight: styleConfig.font.sizes.lg.lineHeight,
                },
            ],
            xl: [
                styleConfig.font.sizes.xl.value,
                {
                    lineHeight: styleConfig.font.sizes.xl.lineHeight,
                },
            ],
            "2xl": [
                styleConfig.font.sizes.two.value,
                {
                    lineHeight: styleConfig.font.sizes.two.lineHeight,
                },
            ],
            "3xl": [
                styleConfig.font.sizes.three.value,
                {
                    lineHeight: styleConfig.font.sizes.three.lineHeight,
                },
            ],
            "4xl": [
                styleConfig.font.sizes.four.value,
                {
                    lineHeight: styleConfig.font.sizes.four.lineHeight,
                },
            ],
            "5xl": [
                styleConfig.font.sizes.five.value,
                {
                    lineHeight: styleConfig.font.sizes.five.lineHeight,
                },
            ],
            "6xl": [
                styleConfig.font.sizes.six.value,
                {
                    lineHeight: styleConfig.font.sizes.six.lineHeight,
                },
            ],
            "7xl": [
                styleConfig.font.sizes.seven.value,
                {
                    lineHeight: styleConfig.font.sizes.seven.lineHeight,
                },
            ],
            "8xl": [
                styleConfig.font.sizes.eight.value,
                {
                    lineHeight: styleConfig.font.sizes.eight.lineHeight,
                },
            ],
            "9xl": [
                styleConfig.font.sizes.nine.value,
                {
                    lineHeight: styleConfig.font.sizes.nine.lineHeight,
                },
            ],
        },
        extend: {
            colors: {
                current: "currentColor",
                inherit: "inherit",
                transparent: "transparent",
                black: styleConfig.colors.black,
                white: styleConfig.colors.white,
                focus: styleConfig.colors.primary[0].hex,
                highlight: lightenColor(
                    styleConfig.colors.primary[0].hex,
                    0.25
                ),
                blue: {
                    DEFAULT: styleConfig.colors.primary[0].hex,
                    hover: darkenColor(styleConfig.colors.primary[0].hex, 0.15),
                    active: darkenColor(styleConfig.colors.primary[0].hex, 0.3),
                },
                red: {
                    DEFAULT: styleConfig.colors.primary[1].hex,
                    hover: darkenColor(styleConfig.colors.primary[1].hex, 0.15),
                    active: darkenColor(styleConfig.colors.primary[1].hex, 0.3),
                },
                grey: {
                    DEFAULT: styleConfig.colors.secondary[0].hex,
                    hover: darkenColor(
                        styleConfig.colors.secondary[0].hex,
                        0.05
                    ),
                    active: darkenColor(
                        styleConfig.colors.secondary[0].hex,
                        0.1
                    ),
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
