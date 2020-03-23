import gql from 'graphql-tag'

export const GET_STATES_QUERY = gql`
 {
  states{
		name
    longitude
    latitude
    casesMS
    deaths
  }
}
`
