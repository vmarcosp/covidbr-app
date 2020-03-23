import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Legend } from 'components/Legend/components/Legends'

import Styled, { CustomPopUpStyles } from './styles'
import { usePinList } from '../../hooks/usePinList'
import { formatToNumber } from 'brazilian-values'
import { colors } from 'css/theme'


export const PinList = () => {
  const states = usePinList()
  return (
    <>
      <CustomPopUpStyles />
      {states.map((state, index) => (
        <Marker key={index} position={[state.latitude, state.longitude]}>
          <Popup className='custom-popup'>
            <Styled.StateName>{state.name}</Styled.StateName>
            <Styled.Divider />
            <Styled.ItemsContainer>
              <Legend
                label='Ativos'
                indicatorType='circle'
                color={colors.blue}
                value={state.casesMS}
              />
              <Legend
                indicatorType='circle'
                label='Óbitos'
                color={colors.red}
                value={state.deaths}
              />
            </Styled.ItemsContainer>
          </Popup>
        </Marker>
      ))}
    </>
  )
}
