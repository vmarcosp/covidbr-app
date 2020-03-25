import React, { useState } from 'react'
import { ValueType } from 'react-select'
import { useMedia } from 'react-use'

import { Option, OptionType } from 'components/Autocomplete/hooks/types'

import { FIND_STATE_BY_UF, FIND_CITY_BY_ID } from './queries'
import { StateQuery, SelectedData, CityQuery } from './types'
import { client } from '.././../App'

const MOBILE_QUERY = '(max-width: 600px)'

const intialData = {
  show: false,
  infos: null
}

export const useHome = () => {
  const [selectedData, setCardData] = useState<SelectedData>(intialData)
  const [isOpen, toggle] = useState(false)
  const isMobile = useMedia(MOBILE_QUERY)

  const toggleCard = () => toggle(!isOpen)

  const hideCard = () => toggle(false)

  const searchStateByUf = async (uf: string) => {
    const { data } = await client.query<StateQuery>({
      variables: { uf },
      query: FIND_STATE_BY_UF
    })

    data && setCardData({
      show: true,
      infos: data.state
    })
  }

  const searchCityById = async (id: string) => {
    const { data } = await client.query<CityQuery>({
      variables: { id },
      query: FIND_CITY_BY_ID
    })

    data && setCardData({
      show: true,
      infos: data.city
    })
  }

  const searchData = async (maybeOption?: ValueType<Option>) => {
    const option = maybeOption as Option

    if (option === null) {
      setCardData(intialData)
    } else if (option.value.type === OptionType.STATE) {
      searchStateByUf(option.value.id)
    } else {
      searchCityById(option.value.id)
    }
  }

  return {
    isOpen,
    toggleCard,
    isMobile,
    hideCard,
    searchData,
    selectedData
  }
}
