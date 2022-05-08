import { Cloudinary } from "@cloudinary/url-gen";
import { crop, scale } from "@cloudinary/url-gen/actions/resize";

import { generateCloudURL } from "../helpers/url";

export const cloudinaryConnection = new Cloudinary({
    cloud: {
        cloudName: process.env.NEXT_PUBLIC_CLOUDNAME,
    },
});

export const image169 = (url) => {
    const cloudImage = cloudinaryConnection
        .image(generateCloudURL(url))
        .resize(crop().aspectRatio("16:9"))
        .resize(scale().width("1150"))
        .format("auto")
        .quality("auto")
        .toURL();

    return cloudImage;
};
