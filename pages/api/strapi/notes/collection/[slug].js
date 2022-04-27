import { strapiConnection } from "../../../../../utilities/api/strapi";

import { NOTES_COLLECTION_QUERY } from "../../../../../graphql/strapi/notes";

export default async function handler(req, res) {
    const slug = req.query.slug;

    const variables = {
        slug: slug,
    };

    const { data, errors } = await strapiConnection.rawRequest(
        NOTES_COLLECTION_QUERY,
        variables
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
