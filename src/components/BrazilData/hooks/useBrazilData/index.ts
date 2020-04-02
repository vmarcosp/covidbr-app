import * as R from 'rambda'
import { useQuery } from '@apollo/react-hooks'
import { CovidData } from 'types/CovidData'

import { GET_BRAZIL_DATA_QUERY } from './GetBrazilData'

const defaultData: CovidData = {
  closedCases: 0,
  totalDeaths: 0,
  totalCases: 0,
  totalRecovered: 0,
  activeCases: 0
}

export interface BrazilDataQuery {
  brazil: CovidData
}

const formatValues = R.pipe(
  R.defaultTo<BrazilDataQuery>({ brazil: defaultData }),
  R.prop('brazil')
)

export const useBrazilData = () => {
  const { loading, data } = useQuery<BrazilDataQuery>(GET_BRAZIL_DATA_QUERY, {
    variables: {}
  })

  return {
    brazilData: formatValues(data),
    loading
  }
}
