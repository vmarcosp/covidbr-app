import React from 'react'
import { useMedia } from 'react-use'
import Navbar from 'components/Navbar/components/Navbar'
import { Map } from 'components/Map'
import { Card } from 'components/Card/components/Card'
import { BrazilData } from 'components/BrazilData/components/BrazilData'
import { PinList } from 'components/PinList/components/PinList'
import { GlobalData } from 'components/GlobalData/components/GlobalData'

import Styled from './styles'
import { useHome } from './useHome'

export const Home = () => {
  const { isOpen, toggleCard, isMobile } = useHome()

  return (
    <>
      <Navbar />
      <Map>
        <PinList />
      </Map>
      <Card isOpen={isOpen} onToggle={toggleCard}>

        <Styled.DataContainer>
          <BrazilData />
        </Styled.DataContainer>

        <Styled.Divider />

        <Styled.GlobalDataContainer show={isOpen}>
          <GlobalData />
        </Styled.GlobalDataContainer>

      </Card>
    </>
  )
}
