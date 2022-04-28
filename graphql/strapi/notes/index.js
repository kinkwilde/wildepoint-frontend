import { gql } from "graphql-request";

export const NOTES_SINGLE_QUERY = gql`
    query {
        notesSingle {
            id
            title
        }
    }
`;

export const NOTES_COLLECTION_QUERY = gql`
    query ($slug: String!) {
        notesBySlug(slug: $slug) {
            id
            slug
            title
        }
    }
`;

export const NOTES_COLLECTIONS_QUERY = gql`
    query {
        notes {
            meta {
                pagination {
                    page
                    pageCount
                    pageSize
                    total
                }
            }
            data {
                id
                attributes {
                    createdAt
                    updatedAt
                    title
                }
            }
        }
    }
`;
