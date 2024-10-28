import React, { useEffect } from 'react';

const RoutePlanner = ({ userLocation, destination }) => {
  useEffect(() => {
    if (userLocation && destination) {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();

      const map = new google.maps.Map(document.getElementById('routeMap'), {
        zoom: 14,
        center: userLocation,
      });

      directionsRenderer.setMap(map);

      directionsService.route(
        {
          origin: userLocation,
          destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            console.error('Route request failed:', status);
          }
        }
      );
    }
  }, [userLocation, destination]);

  return <div id="routeMap" style={{ height: '400px', width: '100%' }} />;
};

export default RoutePlanner;
