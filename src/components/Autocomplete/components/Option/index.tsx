import React from 'react'
import { OptionProps } from 'react-select'

import icon from 'assets/pin-icon.svg'
import Styled from './styles'

export const Option = ({ innerProps, children, isSelected }: OptionProps<any>) => (
  <Styled.Container selected={isSelected} {...innerProps}>
    <Styled.Icon src={icon} alt="Search icon" />
    {children}
  </Styled.Container>
)
