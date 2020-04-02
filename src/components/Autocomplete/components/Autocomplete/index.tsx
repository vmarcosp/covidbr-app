import React, { FocusEventHandler } from 'react'
import Select, { ActionMeta, ValueType } from 'react-select'

import { Option as AutocompleteOption } from 'components/Autocomplete/hooks/types'
import { useAutocomplete } from 'components/Autocomplete/hooks/useAutocomplete'

import Styled from './styles'
import { customStyles } from './customStyles'
import { Option } from '../Option'

interface AutocompleteProps {
  onChange: (v: ValueType<AutocompleteOption>, m: ActionMeta) => void,
  onFocus: FocusEventHandler,
  onBlur: FocusEventHandler
}

export const Autocomplete = ({ onChange, onFocus, onBlur }: AutocompleteProps) => {
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
        onBlur={onBlur}
        noOptionsMessage={() => 'Não há dados para exibir'}
        placeholder='Pesquise por cidade ou estado'
        options={options}
      />
    </Styled.Container>
  )
}
