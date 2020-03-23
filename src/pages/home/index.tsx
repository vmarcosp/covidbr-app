import React from 'react'
import Navbar from 'components/Navbar'
import { Map } from 'components/Map'
import { MobileCard } from 'components/MobileCard'
import { BrazilData } from 'components/BrazilData/components/BrazilData'

export const Home = () => (
  <>
    <Navbar />
    <Map />
    <MobileCard>
      <BrazilData />
      <br />
      <br />
      <br />
      <br />
      <BrazilData />
    </MobileCard>
  </>
)
