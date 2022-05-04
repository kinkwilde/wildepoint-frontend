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
                                    alternativeText
                                    caption
                                    height
                                    url
                                    width
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
