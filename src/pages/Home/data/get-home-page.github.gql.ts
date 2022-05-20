import { gql } from "@apollo/client";

export default gql`
  query GetHomepage($owner: String!, $name: String!) {
    currentRepo @client {
      owner @export(as: "owner")
      name @export(as: "name")
    }
    repository(name: $name, owner: $owner) {
      id
      object(expression: "HEAD:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`;
