/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type StarrableFragment_Gist_Fragment = { id: string, stargazerCount: number, viewerHasStarred: boolean };

export type StarrableFragment_Repository_Fragment = { id: string, stargazerCount: number, viewerHasStarred: boolean };

export type StarrableFragment_Topic_Fragment = { id: string, stargazerCount: number, viewerHasStarred: boolean };

export type StarrableFragmentFragment = StarrableFragment_Gist_Fragment | StarrableFragment_Repository_Fragment | StarrableFragment_Topic_Fragment;

export const StarrableFragmentFragmentDoc = gql`
    fragment StarrableFragment on Starrable {
  id
  stargazerCount
  viewerHasStarred
}
    ` as unknown as DocumentNode<StarrableFragmentFragment, unknown>;