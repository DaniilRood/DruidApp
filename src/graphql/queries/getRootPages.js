import gql from "graphql-tag";

export const GET_ROOT_PAGES = gql `
    query {
  rootPages {
    data {
        id
        parent_id
        page_type
        title
        content
        icon
        level
        is_public
        position
        config
        created_at
        updated_at
    }
    paginatorInfo {
      total
      hasMorePages
      from
      to
      perPage
      count
    }
  }
}

`

export const getModulesAll = gql`
  query getUserModules {
    paginate_subject(page: 1, perPage: 100) {
      data {
        id
        type_id
        author_id
        level
        position
        created_at
        updated_at
        user_id
        fullname {
          first_name
          last_name
        }
        modules {
          id
          name
          created_at
          responsible {
            id
            user_id
            fullname {
              first_name
              last_name
            }
          }

          startdate {
            date
            time
          }
          expirationdate {
            date
            time
          }
          tasks {
            id
            status
          }
        }
      }
      paginatorInfo {
        perPage
        currentPage
        lastPage
        total
        count
        from
        to
        hasMorePages
      }
    }
  }
`;

export const getGroupSubjects = gql`
  query getGroupSubjects($group_id: String!) {
    get_group(id: $group_id) {
      id
      author_id
      name
      description
      created_at
      updated_at
      type_id
      subject {
        id
        user_id
        fullname {
          first_name
          last_name
        }
        email {
          email
        }
        group {
          id
          name
        }
        modules {
          id
          name
        }
        tasks {
          id
          name
        }
      }
    }
  }
`;