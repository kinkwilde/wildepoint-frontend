import { strapiConnection } from "../../../../utilities/api/strapi";

import { HOME_SINGLE_QUERY } from "../../../../graphql/strapi/home";

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

    return res.status(200).json(data);
}
