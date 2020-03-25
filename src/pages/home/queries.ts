import gql from 'graphql-tag'

export const FIND_STATE_BY_UF = gql`
  query FindStateByUf($uf: String!){
    state(filter: { uf: $uf }){
      name
      cases
      casesMS
      casesNotConfirmedByMS
      deaths
      longitude
      latitude
    }
  }
`

export const FIND_CITY_BY_ID = gql`
  query FindCItyByUf($id: String!){
    city(filter: { id: $id }){
      name
      cases
      casesMS
      casesNotConfirmedByMS
      deaths
      longitude
      latitude
    }
  }
`
