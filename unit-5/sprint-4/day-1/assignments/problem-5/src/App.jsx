import React, { useState, useEffect } from 'react';
import Map from './Map';
import Search from './Search';
import Weather from './Weather';
import RoutePlanner from './RoutePlanner';

const App = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  // Get user’s current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => console.error('Error getting location:', error)
    );
  }, []);

  return (
    <div>
      <h1>Location Tracking App</h1>
      {userLocation ? (
        <>
          <Map userLocation={userLocation} destination={destination} />
          <Search setDestination={setDestination} userLocation={userLocation} />
          <Weather location={userLocation} />
          <RoutePlanner userLocation={userLocation} destination={destination} />
        </>
      ) : (
        <p>Loading your location...</p>
      )}
    </div>
  );
};

export default App;
