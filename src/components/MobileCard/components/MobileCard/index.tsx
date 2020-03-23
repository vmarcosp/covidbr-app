import React, { ReactNode } from 'react'

import arrowIcon from './arrow-up.svg'
import Styled from './styles'

interface MobileCardProps {
  children: ReactNode,
  isOpen: boolean,
  onToggle: (event: React.MouseEvent) => void
}

export const MobileCard = ({ children, isOpen, onToggle }: MobileCardProps) => (
  <Styled.Container isOpen={isOpen}>
    <a onClick={onToggle}>
      <Styled.Arrow
        isOpen={isOpen}
        src={arrowIcon}
        alt="Arrow icon"
      />
    </a>
    {children}
  </Styled.Container>
)
