import React from 'react'
import { Map as LeaftletMap, TileLayer } from 'react-leaflet'

const state = {
  lat: -14.2350044,
  lng: -51.9252815
}

export const Map = () => (
  <LeaftletMap
    zoomControl={false}
    style={{ width: '100vw', height: '100vh', top: 0, left: 0, position: 'fixed' }}
    center={[state.lat, state.lng]} zoom={4}
  >
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </LeaftletMap>
)
