export const generateCanonicalURL = (slug) => {
    const base = process.env.NEXT_PUBLIC_APP_URL;

    if (slug === "home") {
        return base;
    } else if (slug === "/") {
        return base;
    } else {
        return base + "/" + slug;
    }
};

export const generateCloudURL = (url) => {
    const imageURL = url;

    let imageURLClean = imageURL.replace(/\.[^/.]+$/, "");

    imageURLClean = imageURLClean.split("/").pop();

    return imageURLClean;
};
