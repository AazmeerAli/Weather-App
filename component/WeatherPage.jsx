'use client';
import { useState } from 'react';

const getConditionIcon = (condition) => {
  if (condition.includes('Thunderstorm')) return 'thunder.svg';
  if (condition.includes('Rain')) return 'rain.svg';
  if (condition.includes('Snow')) return 'snow.svg';
  if (condition.includes('Sleet') || condition.includes('Freezing')) return 'ice.svg';
  if (condition.includes('Fog') || condition.includes('Mist') || condition.includes('Haze')) return 'fog.svg';
  if (condition.includes('Cloudy') || condition.includes('Overcast')) return 'cloudy.svg';
  if (condition.includes('Clear')) return 'clear.svg';
  if (condition.includes('Windy') || condition.includes('Breezy')) return 'wind.svg';
  return 'default.svg'; 
};


export default function WeatherPage() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
console.log(weatherData)
  const fetchWeather = async () => {
    
    const getFormattedDate = (date) => date.toISOString().split('T')[0];
    const today = new Date();
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - 5);
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 5);
    
    const startDate = getFormattedDate(pastDate);
    const endDate = getFormattedDate(futureDate);

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=hours&key=${apiKey}&include=days`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      alert(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Weather App (Past, Current & Future)</h1>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city"
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <button onClick={fetchWeather} style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
        Get Weather
      </button>

      {weatherData && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Weather for {weatherData.resolvedAddress}</h2>

          <h3>Days ({weatherData.days.length})</h3>
          <ul>
            {weatherData.days.map(day => (
              <li key={day.datetime} style={{ marginBottom: '1rem' }}>
                <strong>{day.datetime}</strong><br />
                Max Temp: {day.tempmax}°C <br />
                Min Temp: {day.tempmin}°C <br />
                Conditions: {day.conditions}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
