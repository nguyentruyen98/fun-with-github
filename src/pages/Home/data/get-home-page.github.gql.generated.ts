/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type GetHomepageQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  name: Types.Scalars['String'];
}>;


export type GetHomepageQuery = { currentRepo: { owner: string, name: string }, repository?: { id: string, object?: { text?: string | null | undefined } | {} | null | undefined } | null | undefined };


export const GetHomepageDocument = gql`
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
    ` as unknown as DocumentNode<GetHomepageQuery, GetHomepageQueryVariables>;