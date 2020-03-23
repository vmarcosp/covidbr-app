import React from 'react'

export const useHome = () => {
  const [isOpen, toggle] = React.useState(false)

  const toggleCard = () => toggle(!isOpen)

  return {
    isOpen,
    toggleCard
  }
}
