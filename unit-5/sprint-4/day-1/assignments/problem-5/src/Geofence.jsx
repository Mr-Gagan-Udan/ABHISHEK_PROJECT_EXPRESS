import React, { useEffect } from 'react';

const Geofence = ({ userLocation, geofenceArea }) => {
  useEffect(() => {
    if (userLocation) {
      const distance = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(userLocation),
        new google.maps.LatLng(geofenceArea.lat, geofenceArea.lng)
      );

      if (distance < geofenceArea.radius) {
        alert('You have entered the geofenced area!');
      }
    }
  }, [userLocation, geofenceArea]);

  return null;  
};

export default Geofence;
