import { useLazyQuery } from '@apollo/react-hooks'
import { fromNullable, fold } from 'fp-ts/lib/Option'

import { StatesCitiesQuery } from './StatesCitiesQuery'
import {
  Option,
  OptionType,
  StateData,
  CityData,
  QueryResult
} from './types'
import { useMount } from 'react-use'

const toOptionState = ({ name, uf }: StateData): Option => ({
  label: name,
  value: {
    id: uf,
    type: OptionType.STATE
  }
})

const toOptionCity = ({ name, uf, id }: CityData): Option => ({
  label: `${name}, ${uf}`,
  value: {
    id,
    type: OptionType.CITY
  }
})

const optionsOfStates = (states: StateData[] = []) => states.map(toOptionState)

const optionsOfCities = (cities: CityData[] = []) => cities.map(toOptionCity)

const toOptions = fold(
  () => ([]),
  (data: QueryResult) => [
    ...optionsOfCities(data.cities),
    ...optionsOfStates(data.states)
  ]
)

export const useAutocomplete = () => {
  const [searchData, { data }] = useLazyQuery<QueryResult>(StatesCitiesQuery, {
    variables: { name: '' }
  })

  const requestOptions = (name: string) => {
    const variables = { name }
    searchData({ variables })
  }

  useMount(() => {
    requestOptions('')
  })

  return {
    options: toOptions(fromNullable(data)),
    requestOptions
  }
}
