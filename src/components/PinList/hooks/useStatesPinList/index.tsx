import * as R from 'rambda'
import { fromNullable, Option, isNone } from 'fp-ts/lib/Option'
import { useQuery } from '@apollo/react-hooks'

import { GET_STATES_CITIES_QUERY } from './GetCitiesStatesQuery'

export interface StateData {
  name: string
  longitude: number
  latitude: number
  casesMS: number
  deaths: number
}

interface CityData {
  name: string
  longitude: number
  latitude: number
  casesMS: number
}

interface DataQuery {
  states: StateData[]
  cities: CityData[]
}

export type PinData = StateData | CityData

export const isState = (pin: PinData) => (pin as StateData).deaths !== undefined

const toPinList = (data: Option<DataQuery>): PinData[] => {
  if (isNone(data)) return []

  const cities = R.propOr<CityData[], DataQuery, CityData[]>([], 'cities', data.value)
  const states = R.propOr<StateData[], DataQuery, StateData[]>([], 'states', data.value)

  return [
    ...states,
    ...cities
  ]
}

export const useStatesPinList = () => {
  const { data } = useQuery<DataQuery>(GET_STATES_CITIES_QUERY)

  return toPinList(fromNullable(data))
}
