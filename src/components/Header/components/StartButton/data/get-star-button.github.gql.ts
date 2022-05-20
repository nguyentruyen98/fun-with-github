import { gql } from "@apollo/client";

import StarrableFragment from "./starrable-fragment.github.gql";

export default gql`
  query GetStarButton($owner: String!, $name: String!) {
    currentRepo @client {
      owner @export(as: "owner")
      name @export(as: "name")
    }
    repository(name: $name, owner: $owner) {
      ...StarrableFragment
    }
  }
  ${StarrableFragment}
`;
