const withPWA = require("next-pwa");

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
    },
    images: {
        domains: ["res.cloudinary.com"],
        deviceSizes: [640, 768, 1024, 1280, 1536],
    },
    i18n: {
        defaultLocale: "en-gb",
        localeDetection: false,
        locales: ["en-gb"],
    },
    reactStrictMode: true,
    trailingSlash: false,
    generateBuildId: () => "build",
});
