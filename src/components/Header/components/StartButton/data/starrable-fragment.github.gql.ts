import { gql } from "@apollo/client";

export default gql`
  fragment StarrableFragment on Starrable {
    id
    stargazerCount
    viewerHasStarred
  }
`;
