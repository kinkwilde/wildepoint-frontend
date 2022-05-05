import { Cloudinary } from "@cloudinary/url-gen";

export const generateCanonicalUrl = (slug) => {
    const base = process.env.NEXT_PUBLIC_APP_URL;

    if (slug === "home") {
        return base;
    } else if (slug === "/") {
        return base;
    } else {
        return base + "/" + slug;
    }
};

export const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.NEXT_PUBLIC_CLOUDNAME,
    },
});
