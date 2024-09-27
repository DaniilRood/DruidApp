import { gql } from 'graphql-tag';

export const GET_SPACE = gql`
query GET_SPACE($id: String!){
  space(id: $id) {
      id
      author_id
      name
      description
      config
      created_at
      updated_at
    }
}
`;