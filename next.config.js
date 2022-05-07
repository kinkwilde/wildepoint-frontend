module.exports = {
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
};
