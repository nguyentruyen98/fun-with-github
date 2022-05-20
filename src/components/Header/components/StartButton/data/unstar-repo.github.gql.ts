import { gql } from "@apollo/client";

import StarrableFragment from "./starrable-fragment.github.gql";

export default gql`
  mutation UnstarRepo($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        ...StarrableFragment
      }
    }
  }
  ${StarrableFragment}
`;
