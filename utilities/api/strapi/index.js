import { GraphQLClient } from "graphql-request";

export const strapiConnection = new GraphQLClient(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`
);
