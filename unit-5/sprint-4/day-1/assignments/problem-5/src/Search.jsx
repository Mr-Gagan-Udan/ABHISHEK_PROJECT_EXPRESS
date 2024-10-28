import React, { useState } from 'react';

const Search = ({ setDestination, userLocation }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: searchInput }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        setDestination({ lat: location.lat(), lng: location.lng() });
      } else {
        console.error('Geocode failed:', status);
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter address or place"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
