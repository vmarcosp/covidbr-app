import React from 'react'
import { useMedia } from 'react-use'

const MOBILE_QUERY = '(max-width: 600px)'

export const useHome = () => {
  const [isOpen, toggle] = React.useState(false)
  const isMobile = useMedia(MOBILE_QUERY)

  const toggleCard = () => toggle(!isOpen)

  return {
    isOpen,
    toggleCard,
    isMobile
  }
}
