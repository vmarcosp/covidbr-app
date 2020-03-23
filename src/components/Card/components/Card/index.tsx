import React, { ReactNode } from 'react'

import arrowIcon from './arrow-up.svg'
import Styled from './styles'

interface Card {
  children: ReactNode,
  isOpen: boolean,
  onToggle: (event: React.MouseEvent) => void
}

export const Card = ({ children, isOpen, onToggle }: Card) => (
  <Styled.Container isOpen={isOpen}>
    <Styled.ArrowButton onClick={onToggle}>
      <Styled.Arrow
        isOpen={isOpen}
        src={arrowIcon}
        alt="Arrow icon"
      />
    </Styled.ArrowButton>
    {children}
  </Styled.Container>
)
