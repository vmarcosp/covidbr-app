import gql from 'graphql-tag'

export const GET_STATES_CITIES_QUERY = gql`
 {
  states {
    name
    longitude
    latitude
    casesMS
    deaths
  }
  cities {
    name
    longitude
    latitude
    casesMS
  }
}
`
