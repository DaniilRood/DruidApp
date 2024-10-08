import { gql } from 'graphql-tag';

export const USER_SIGN_IN = gql `
mutation UserSignIn($input: UserSignInInput!) {
	userSignIn(input: $input) {
		recordId
		record {
			token_type
			expires_in
			access_token
			refresh_token
		}
		status
	}
}
`;