import { useLazyQuery } from '@apollo/react-hooks'
import { fromNullable, fold } from 'fp-ts/lib/Option'
import * as R from 'rambda'

import { StatesCitiesQuery } from './StatesCitiesQuery'

interface CityData {
  id: string
  name: string
  uf: string
}

interface StateData {
  name: string
  uf: string
}

interface QueryResult {
  cities: CityData[]
  states: StateData[]
}

interface Option {
  label: string
  value: string
}

const optionsOfStates = (states: StateData[]) => states.map(({ name, uf }) => ({
  label: name,
  value: uf
}))

const optionsOfCities = (cities: CityData[]) => cities.map(({ name, id, uf }) => ({
  label: `${name}, ${uf}`,
  value: id
}))

const toOptions = fold(
  () => ([]),
  (data: QueryResult) => {
    const cities = R.propOr<CityData[], QueryResult, CityData[]>([], 'cities', data)
    const states = R.propOr<StateData[], QueryResult, StateData[]>([], 'states', data)

    return [
      ...optionsOfCities(cities),
      ...optionsOfStates(states)
    ]
  }
)

export const useAutocomplete = () => {
  const [searchData, { data }] = useLazyQuery<QueryResult>(StatesCitiesQuery, {
    variables: { name: '' }
  })

  const requestOptions = (name: string) => {
    const variables = { name }
    searchData({ variables })
  }

  return {
    options: toOptions(fromNullable(data)),
    requestOptions
  }
}
