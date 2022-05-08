module.exports = {
    darkMode: "class",
    content: ["./components/**/*.{js,jsx}", "./pages/**/*.{js,jsx}"],
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
        fontWeight: {
            light: 300,
            normal: 400,
            bold: 700,
            black: 900,
        },
        extend: {
            fontFamily: {
                merriweather: ["Merriweather", "serif"],
                montserrat: ["Montserrat", "sans-serif"],
                firacode: ["Fira Code", "monospace"],
            },
        },
    },
    plugins: [],
};
