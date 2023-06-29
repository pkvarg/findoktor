import React, { useState } from 'react'
import Map, { GeolocateControl } from 'react-map-gl'

const ServicesPage = () => {
  const token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

  const [viewPort, setViewPort] = useState({
    latitude: 48.16096133288094,
    longitude: 17.164729724275535,
    zoom: 17,
  })

  return (
    <>
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          ...viewPort,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle='mapbox://styles/mapbox/streets-v12'
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
    </>
  )
}

export default ServicesPage
