module.exports = {
    i18n: {
        defaultLocale: "en-gb",
        localeDetection: false,
        locales: ["en-gb"],
    },
    images: {
        domains: ["localhost", "res.cloudinary.com"],
    },
    reactStrictMode: true,
    trailingSlash: false,
    generateBuildId: () => "build",
};
