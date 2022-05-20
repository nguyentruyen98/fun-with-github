import { gql } from "@apollo/client";

export default gql`
  query GetWatcherButton($owner: String!, $name: String!) {
    currentRepo @client {
      owner @export(as: "owner")
      name @export(as: "name")
    }
    repository(name: $name, owner: $owner) {
      id
      watchers {
        totalCount
      }
      stargazerCount
      viewerSubscription
    }
  }
`;
