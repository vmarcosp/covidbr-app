import gql from 'graphql-tag'

export const StatesCitiesQuery = gql`
  query FindStatesCitiesByName($name: String!) {
    states(filter: { name: $name }, pagination: { offset: 0, first: 2 }){
      name
      uf
    }

    cities(filter: { name: $name }, pagination: { offset: 0, first: 2 }){
      id
      name
      uf
    }
  }
`
