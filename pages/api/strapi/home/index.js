import { strapiConnection } from "../../../../utilities/api/strapi";

import { HOME_SINGLE_QUERY } from "../../../../graphql/strapi/home";

import { image169 } from "../../../../helpers/images";

export default async function handler(_req, res) {
    const { data, errors } = await strapiConnection.rawRequest(
        HOME_SINGLE_QUERY
    );

    res.setHeader(
        "Cache-Control",
        "public, s-maxage=300, stale-while-revalidate=60"
    );

    if (errors) {
        return console.error(errors);
        // return console.error(errors), res.status(400).json(errors);
    }

    let modifyData = data;

    modifyData.index.data.attributes.hero.image.data.attributes.url = image169(
        modifyData.index.data.attributes.hero.image.data.attributes.url
    );

    return res.status(200).json(modifyData);
}
