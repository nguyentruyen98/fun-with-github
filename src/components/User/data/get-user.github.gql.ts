import { gql } from "@apollo/client";

export default gql`
  query GetUser {
    viewer {
      id
      name
      avatarUrl
      url
    }
  }
`;
