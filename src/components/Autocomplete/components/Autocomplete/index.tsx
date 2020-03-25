import React from 'react'
import Select from 'react-select'

import { useAutocomplete } from 'components/Autocomplete/hooks/useAutocomplete'

import Styled from './styles'
import { customStyles } from './customStyles'
import { Option } from '../Option'

export const Autocomplete = () => {
  const { options, requestOptions } = useAutocomplete()

  return (
    <Styled.Container>
      <Select
        isClearable
        components={{ Option }}
        styles={customStyles}
        onInputChange={requestOptions}
        noOptionsMessage={() => 'Nenhum dado encontrado'}
        placeholder='Pesquise por cidade ou estado'
        options={options}
      />
    </Styled.Container>
  )
}
