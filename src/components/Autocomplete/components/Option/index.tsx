import React from 'react'
import { OptionProps } from 'react-select'

import Styled from './styles'
import icon from './pin-icon.svg'

export const Option = ({ innerProps, children, isSelected }: OptionProps<any>) => (
  <Styled.Container selected={isSelected} {...innerProps}>
    <Styled.Icon src={icon} alt="Search icon" />
    {children}
  </Styled.Container>
)
