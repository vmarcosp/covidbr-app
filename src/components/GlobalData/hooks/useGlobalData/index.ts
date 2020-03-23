import { useQuery } from '@apollo/react-hooks'
import { GET_GLOBAL_DATA_QUERY } from './GetGlobalData'
import * as R from 'rambda'
import { CovidData } from 'types/CovidData'

const defaultData: CovidData = {
  closedCases: 0,
  totalDeaths: 0,
  totalCases: 0,
  totalRecovered: 0,
  activeCases: 0
}

interface GlobalData {
  global: CovidData
}

const formatValues = R.pipe(
  R.defaultTo<GlobalData>({ global: defaultData }),
  R.prop('global')
)

export const useGlobalData = () => {
  const { data } = useQuery<GlobalData>(GET_GLOBAL_DATA_QUERY)

  return formatValues(data)
}
