import gql from 'graphql-tag';

export const GET_PAGES = gql`
  query GetPages($perPage: Int!, $page: Int!) {
    pages(perPage: $perPage, page: $page) {
      data {
        id
        parent_id
        page_type
        title
        content
        icon
        level
        is_public
        is_block
        position
        config
        created_at
        updated_at
      }
      paginatorInfo {
        perPage
        count
        total
        currentPage
        from
        to
        lastPage
        hasMorePages
      }
    }
  }
`;
