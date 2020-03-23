import React, { ReactNode } from 'react'

import arrowIcon from './arrow-up.svg'
import Styled from './styles'

interface MobileCardProps {
  children: ReactNode
}

export const MobileCard = ({ children }: MobileCardProps) => {
  const [isOpen, toggle] = React.useState(false)

  return (
    <Styled.Container isOpen={isOpen}>
      <a onClick={() => toggle(!isOpen)}>
        <Styled.Arrow
          isOpen={isOpen}
          src={arrowIcon}
          alt="Arrow icon"
        />
      </a>
      {children}
    </Styled.Container>
  )
}
