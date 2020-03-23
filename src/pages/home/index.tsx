import React from 'react'
import Navbar from 'components/Navbar/components/Navbar'
import { Map } from 'components/Map'
import { MobileCard } from 'components/MobileCard/components/MobileCard'
import { BrazilData } from 'components/BrazilData/components/BrazilData'
import { GlobalData } from 'components/GlobalData/components/GlobalData'
import { useHome } from './useHome'

export const Home = () => {
  const { isOpen, toggleCard } = useHome()

  return (
    <>
      <Navbar />
      <Map />
      <MobileCard isOpen={isOpen} onToggle={toggleCard}>
        <BrazilData />
        <br />
        <br />
        <GlobalData />
      </MobileCard>
    </>
  )
}
