import React from 'react'
import Navbar from 'components/Navbar/components/Navbar'
import { Map } from 'components/Map'
import { MobileCard } from 'components/MobileCard/components/MobileCard'
import { BrazilData } from 'components/BrazilData/components/BrazilData'
import { GlobalData } from 'components/GlobalData/components/GlobalData'

export const Home = () => (
  <>
    <Navbar />
    <Map />
    <MobileCard>
      <BrazilData />
      <br />
      <br />
      <GlobalData />
    </MobileCard>
  </>
)
