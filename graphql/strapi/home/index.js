import { gql } from "graphql-request";

export const HOME_SINGLE_QUERY = gql`
    query {
        index {
            data {
                attributes {
                    content {
                        ... on ComponentHomepageHero {
                            image {
                                data {
                                    attributes {
                                        name
                                        alternativeText
                                        caption
                                        url
                                        height
                                        width
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
