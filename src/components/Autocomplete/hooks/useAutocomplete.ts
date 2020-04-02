import { useLazyQuery } from '@apollo/react-hooks'
import { useMount } from 'react-use'
import { fromNullable, fold } from 'fp-ts/lib/Option'

import { StatesCitiesQuery } from './StatesCitiesQuery'
import {
  Option,
  OptionType,
  StateData,
  CityData,
  QueryResult
} from './types'

const toOptionState = ({ name, uf: id }: StateData): Option => ({
  label: name,
  value: {
    id,
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

const toOptions = fold(
  () => [],
  ({ cities, states }: QueryResult) => [
    ...cities.map(toOptionCity),
    ...states.map(toOptionState)
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
