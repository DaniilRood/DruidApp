import { gql } from 'graphql-tag';

export const SPACE_INVITE_USER = gql `

  mutation spaceInviteUser($input: SpaceInviteUserInput!) {
  spaceInviteUser(input: $input) {
      status
  }
}

`