import gql from "graphql-tag";

export const pages = gql`
    query pages {
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
            is_block
            position
            config
            created_at
            updated_at
            object {
                id
            }
            children {
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
                object {
                    id
                    type_id
                }
            }
            }
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


export const getGroupSubjects = gql`
  query getGroupSubjects($group_id: String!) {
    get_group(id: $group_id) {
      id
  	  author_id
  	  name
  	  description
  	  created_at
  	  updated_at
  	  subject{
      object{
        fullname {
          first_name
          last_name
        }
          id
      }
    }
      group {
        object {
          id
          name
        }
      }
    }
  }
`;
export const getSubject = gql`
  query getSubject($id: String!) {
      get_subject(id: $id) {
      email {
        email
      }
      group {
        object {
          name
        	id
        }
      }

        fullname {
          first_name
          middle_name
          last_name
        }
      
      }
      
  }
`;
export const getPage = gql`
  query getPage($id: String!) {
    page(id: $id) {
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
      is_block
      created_at
      updated_at
      object {
        id
      }
    }
  }
`;
