/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import { StarrableFragmentFragmentDoc } from './starrable-fragment.github.gql.generated';
export type UnstarRepoMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type UnstarRepoMutation = { removeStar?: { starrable?: { id: string, stargazerCount: number, viewerHasStarred: boolean } | { id: string, stargazerCount: number, viewerHasStarred: boolean } | { id: string, stargazerCount: number, viewerHasStarred: boolean } | null | undefined } | null | undefined };


export const UnstarRepoDocument = gql`
    mutation UnstarRepo($id: ID!) {
  removeStar(input: {starrableId: $id}) {
    starrable {
      ...StarrableFragment
    }
  }
}
    ${StarrableFragmentFragmentDoc}` as unknown as DocumentNode<UnstarRepoMutation, UnstarRepoMutationVariables>;