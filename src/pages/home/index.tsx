import React from 'react'
import QueueAnim from 'rc-queue-anim'

import Navbar from 'components/Navbar/components/Navbar'
import { Map } from 'components/Map'
import { Card } from 'components/Card/components/Card'
import { BrazilData } from 'components/BrazilData/components/BrazilData'
import { PinList } from 'components/PinList/components/PinList'
import { GlobalData } from 'components/GlobalData/components/GlobalData'
import { Autocomplete } from 'components/Autocomplete/components/Autocomplete'
import { SelectedData } from 'components/SelectedData/components/SelectedData'

import Styled from './styles'
import { useHome } from './useHome'

export const Home = () => {
  const { isOpen, center, zoom, toggleCard, showCard, visible, hideCard, searchData, selectedData } = useHome()

  return (
    <>
      <Navbar />
      <QueueAnim
        type={'bottom'}
        duration={600}
        delay={500}
      >
        <Autocomplete
          key={1}
          onFocus={hideCard}
          onBlur={showCard}
          onChange={searchData}
        />
      </QueueAnim>

      <Map zoom={zoom} center={center}>
        <PinList />
      </Map>
      <Card
        key={1}
        onClick={toggleCard}
        visible={visible}
        isOpen={isOpen}
        onToggle={toggleCard}
      >

        <Styled.DataContainer>
          {selectedData.infos !== null
            ? <SelectedData
              data={selectedData.infos}
            />
            : <BrazilData />
          }
        </Styled.DataContainer>

        <Styled.Divider />

        <Styled.GlobalDataContainer show={isOpen}>
          <GlobalData />
        </Styled.GlobalDataContainer>

      </Card>
    </>
  )
}
