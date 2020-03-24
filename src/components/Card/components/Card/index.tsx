import React, { ReactNode } from 'react'
import { useSwipeable, SwipeCallback } from 'react-swipeable'
import arrowIcon from './arrow-up.svg'
import Styled from './styles'

interface Card {
  children: ReactNode,
  isOpen: boolean,
  onToggle: SwipeCallback
}

export const Card = ({ children, isOpen, onToggle }: Card) => {
  const handlers = useSwipeable({ onSwipedUp: onToggle, onSwipedDown: onToggle })
  return (
    <Styled.Container {...handlers} isOpen={isOpen}>
      {/* <Styled.ArrowButton>
        <Styled.Arrow
          isOpen={isOpen}
          src={arrowIcon}
          alt="Arrow icon"
        />
      </Styled.ArrowButton> */}
      {children}
    </Styled.Container>
  )
}
