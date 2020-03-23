import gql from 'graphql-tag'

export const GET_BRAZIL_DATA_QUERY = gql`
  {
    brazil {
      totalDeaths
      totalCases
      totalRecovered
      closedCases
      activeCases
    }
  }
`
