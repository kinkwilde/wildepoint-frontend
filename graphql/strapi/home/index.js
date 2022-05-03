import { gql } from "graphql-request";

export const HOME_SINGLE_QUERY = gql`
    query {
        index {
            data {
                attributes {
                    richtext {
                        text
                    }
                }
            }
        }
    }
`;
