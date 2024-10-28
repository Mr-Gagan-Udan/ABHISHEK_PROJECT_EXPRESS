import React, { useEffect, useState } from 'react';

const Weather = ({ location }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (location) {
      const apiKey = 'YOUR_OPENWEATHER_API_KEY';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => setWeather(data));
    }
  }, [location]);

  return (
    <div>
      {weather ? (
        <div>
          <h3>Weather at Your Location</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
