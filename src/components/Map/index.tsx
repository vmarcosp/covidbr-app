import 'leaflet-providers'
import React from 'react'
import { Map as LeaftletMap, TileLayer } from 'react-leaflet'
import { LatLng, LatLngLiteral, LatLngTuple } from 'leaflet'

interface MapProps {
  center?: LatLng | LatLngLiteral | LatLngTuple | undefined,
  children: React.ReactNode
}

const defaultCenter: LatLngTuple = [-14.2350044, -51.9252815]

export const Map = ({ center = defaultCenter, children }: MapProps) => (
  <LeaftletMap
    style={{ width: '100vw', height: '100vh', top: 0, left: 0, position: 'fixed' }}
    maxZoom={7}
    minZoom={4}
    zoomControl={false}
    center={center}
    zoom={4}
  >
    <TileLayer
      url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
    />
    {children}
  </LeaftletMap>
)
