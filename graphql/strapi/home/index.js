import { gql } from "graphql-request";

export const HOME_SINGLE_QUERY = gql`
    query {
        index {
            data {
                id
                attributes {
                    title
                    intro
                    hero {
                        image {
                            data {
                                attributes {
                                    name
                                    alternativeText
                                    caption
                                    height
                                    width
                                    url
                                    provider
                                    provider_metadata
                                }
                            }
                        }
                    }
                    richtext {
                        text
                    }
                }
            }
        }
    }
`;
