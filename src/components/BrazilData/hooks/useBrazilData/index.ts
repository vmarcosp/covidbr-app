import { formatToNumber } from 'brazilian-values'
import { useQuery } from '@apollo/react-hooks'
import { GET_BRAZIL_DATA_QUERY } from './GetBrazilData'
import * as R from 'rambda'
import { BrazilDataQuery, BrazilData } from 'src/types/BrazilData'

const defaultData: BrazilData = {
  closedCases: 0,
  totalDeaths: 0,
  totalCases: 0,
  totalRecovered: 0,
  activeCases: 0
}

const formatValues = R.pipe(
  R.defaultTo<BrazilDataQuery>({ brazil: defaultData }),
  R.prop('brazil')
)

export const useBrazilData = () => {
  const { data } = useQuery<BrazilDataQuery>(GET_BRAZIL_DATA_QUERY)

  return formatValues(data)
}
