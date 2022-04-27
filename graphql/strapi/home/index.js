import { gql } from "graphql-request";

export const HOME_SINGLE_QUERY = gql`
    query {
        homeSingle {
            id
            content {
                __typename
                ... on ComponentContentRichtextComponent {
                    content
                    id
                }
            }
        }
    }
`;
