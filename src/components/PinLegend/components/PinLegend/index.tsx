import React from 'react'

import stateIcon from 'assets/state-pin.svg'
import cityIcon from 'assets/city-pin.svg'

import Styled from './styles'

export const PinLegend = () => (
  <Styled.Container>
    <Styled.Item>
      <Styled.Icon src={stateIcon} alt="State pin icon" />
      <Styled.Label>
        Estados
      </Styled.Label>
    </Styled.Item>

    <Styled.Item>
      <Styled.Icon src={cityIcon} alt="City pin icon"/>
      <Styled.Label>
        Cidades
      </Styled.Label>
    </Styled.Item>
  </Styled.Container>
)
