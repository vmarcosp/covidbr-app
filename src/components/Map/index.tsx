import 'leaflet-providers'
import React from 'react'
import { Map as LeaftletMap, TileLayer } from 'react-leaflet'
import { LatLng, LatLngLiteral, LatLngTuple } from 'leaflet'

interface MapProps {
  center: LatLng | LatLngLiteral | LatLngTuple,
  zoom: number
  children: React.ReactNode
}

export const Map = ({ center, children, zoom }: MapProps) => (
  <LeaftletMap
    style={{ width: '100vw', height: '100vh', top: 0, left: 0, position: 'fixed' }}
    maxZoom={10}
    minZoom={4}
    zoomControl={false}
    center={center}
    zoom={zoom || 4}
  >
    <TileLayer
      url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
    />
    {children}
  </LeaftletMap>
)
