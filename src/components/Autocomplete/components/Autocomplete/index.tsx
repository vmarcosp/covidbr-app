import React, { FocusEventHandler } from 'react'
import Select, { ActionMeta, ValueType } from 'react-select'

import { useAutocomplete, Option as AutocompleteOption } from 'components/Autocomplete/hooks/useAutocomplete'

import Styled from './styles'
import { customStyles } from './customStyles'
import { Option } from '../Option'

interface AutocompleteProps {
  onChange: (v: ValueType<AutocompleteOption>, m: ActionMeta) => void,
  onFocus: FocusEventHandler
}

export const Autocomplete = ({ onChange, onFocus }: AutocompleteProps) => {
  const { options, requestOptions } = useAutocomplete()

  return (
    <Styled.Container>
      <Select
        isClearable
        components={{ Option }}
        styles={customStyles}
        onInputChange={requestOptions}
        onChange={onChange}
        onFocus={onFocus}
        noOptionsMessage={() => 'Não foram encontradas cidades ou estados'}
        placeholder='Pesquise por cidade ou estado'
        options={options}
      />
    </Styled.Container>
  )
}
