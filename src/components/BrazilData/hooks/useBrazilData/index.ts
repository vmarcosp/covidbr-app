import { useQuery } from '@apollo/react-hooks'
import { GET_BRAZIL_DATA_QUERY } from './GetBrazilData'
import * as R from 'rambda'
import { CovidData } from 'src/types/CovidData'

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
  const { data, loading } = useQuery<BrazilDataQuery>(GET_BRAZIL_DATA_QUERY)

  return {
    brazilData: formatValues(data),
    loading
  }
}
