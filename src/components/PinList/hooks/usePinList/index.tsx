import { useQuery } from '@apollo/react-hooks'
import * as R from 'rambda'

import { GET_STATES_QUERY } from './GetStatesQuery'

interface StateData {
  name: string
  longitude: number
  latitude: number
  casesMS: number
  deaths: number
}

interface StateDataQuery {
  states: StateData[]
}

const defaultData = {
  states: []
}

const getStates = R.pipe(
  R.defaultTo<StateDataQuery>(defaultData),
  R.prop('states')
)

export const usePinList = () => {
  const { data } = useQuery<StateDataQuery>(GET_STATES_QUERY)

  return getStates(data)
}
