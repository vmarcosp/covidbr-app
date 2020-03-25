import React from 'react'
import { Marker, Popup } from 'react-leaflet'

import { colors } from 'css/theme'
import { Legend } from 'components/Legend/components/Legends'
import { cityPinIcon, statePinIcon } from './icons'

import Styled, { CustomPopUpStyles } from './styles'
import { useStatesPinList, isState, StateData, PinData } from '../../hooks/useStatesPinList'

const getPinIcon = (pin: PinData) => isState(pin) ? statePinIcon : cityPinIcon

export const PinList = () => {
  const pins = useStatesPinList()
  return (
    <>
      <CustomPopUpStyles />
      {pins.map((pin, index) => (
        <Marker icon={getPinIcon(pin)} key={index} position={[pin.latitude, pin.longitude]}>
          <Popup className='custom-popup'>
            <Styled.StateName>{pin.name}</Styled.StateName>

            <Styled.Divider />

            <Styled.ItemsContainer>
              <Legend
                label='Ativos'
                indicatorType='circle'
                color={colors.blue}
                value={pin.casesMS}
              />
              {isState(pin) &&
                <Legend
                  indicatorType='circle'
                  label='Óbitos'
                  color={colors.red}
                  value={(pin as StateData).deaths}
                />}
            </Styled.ItemsContainer>
          </Popup>
        </Marker>
      ))}
    </>
  )
}
