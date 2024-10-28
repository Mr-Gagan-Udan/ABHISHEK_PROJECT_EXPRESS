import React, { useEffect, useRef } from 'react';

const Map = ({ userLocation, destination }) => {
  const mapRef = useRef(null);
  let map;
  let marker;

  useEffect(() => {
    if (userLocation) {
      map = new google.maps.Map(mapRef.current, {
        zoom: 14,
        center: userLocation,
      });

      marker = new google.maps.Marker({
        position: userLocation,
        map,
        title: 'Your Location',
      });

      if (destination) {
        const destinationMarker = new google.maps.Marker({
          position: destination,
          map,
          title: 'Destination',
        });
        map.setCenter(destination);
      }
    }
  }, [userLocation, destination]);

  return <div id="map" ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default Map;
