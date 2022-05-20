import { gql } from "@apollo/client";

import StarrableFragment from "./starrable-fragment.github.gql";

export default gql`
  mutation StarRepo($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        ...StarrableFragment
      }
    }
  }
  ${StarrableFragment}
`;
