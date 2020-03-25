import * as L from 'leaflet'

export const cityPinIcon = new L.Icon({
  iconUrl: require('assets/city-pin.svg'),
  iconRetinaUrl: require('assets/city-pin.svg'),
  iconSize: new L.Point(20, 20)
})

export const statePinIcon = new L.Icon({
  iconUrl: require('assets/state-pin.svg'),
  iconRetinaUrl: require('assets/state-pin.svg'),
  iconSize: new L.Point(30, 30),
  className: 'state-pin-icon'
})
