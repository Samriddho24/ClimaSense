import React, { useState } from 'react'
import "./App.css";
import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const[city, setCity] = useState("");
  const[weather, setWeather] = useState(null);
  return (
    <div className='container'>
        <h1>ClimaSense</h1>
        <p>Know the weather before you step outside.</p>
        <input 
          type="text"
          placeholder='Enter city Name'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
    </div>
  )
  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`
      );
  
      console.log(response.data);
      setWeather(response.data);
  
    } catch (error) {
      console.log(error.response?.data);
    }
  }
}

export default App
