import React, { useState } from 'react'
import "./App.css";
import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const[city, setCity] = useState("");
  const[weather, setWeather] = useState(null);
  const[bgClass, setBgClass] = useState("default");
  const[error, setError] = useState("")
  const [loading, setLoading] = useState(false);
  return (
    <div className={`container ${bgClass}`}>
        <h1>ClimaSense</h1>
        <p>Know the weather before you step outside.</p>
        <input onKeyDown={(e) => {
            if (e.key === "Enter") {
                handleSearch();
                }
            }}
          type="text"
          placeholder='Enter city Name'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>{loading ? "Searching..." : "Search"}</button>
        {error && (
          <p className="error">
            {error}
          </p>
        )}
        {weather && (
          <div className="weather-card">
            <h2>City: {weather.name}</h2>
            <div className="temp"><h2>Temperature:{Math.round(weather.main.temp)}°C</h2></div>
            <div className="condition"><h2>Condition: {weather.weather[0].main}</h2></div>
            <div className="details">
              <div className="detail"><h2>Humidity: {weather.main.humidity}</h2></div>
              <div className="detail"><h2>Wind Speed: {weather.wind.speed}</h2></div>
            </div>
            
            
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="image" />
          </div>
          
          )}
    </div>
  )
  async function handleSearch() {
    try {
      setLoading(true)
      setError("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`
      );
  
      setWeather(response.data);
      setLoading(false)
      const condition = response.data.weather[0].main;

      const backgrounds = {
      Clear: "clear",
      Clouds: "clouds",
      Rain: "rain",
      Drizzle: "rain",
      Thunderstorm: "thunderstorm",
      Snow: "snow",
      Mist: "mist",
      Fog: "mist",
      Haze: "mist",
};

setBgClass(backgrounds[condition] || "default");
  
    } catch (error) {
      console.log(error.response?.data);
      setLoading(false)
      setError("City not found!");
      setWeather(null);
    }
  }
}

export default App
