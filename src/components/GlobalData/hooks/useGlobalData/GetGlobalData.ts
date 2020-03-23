import gql from 'graphql-tag'

export const GET_GLOBAL_DATA_QUERY = gql`
  {
    global {
      totalDeaths
      totalCases
      totalRecovered
      closedCases
      activeCases
    }
  }
`
