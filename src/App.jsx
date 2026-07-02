import React, { useState } from 'react'
import "./App.css";

function App() {
  const[city, setCity] = useState(" ");
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
  function handleSearch(){
    console.log(city);
  }
}

export default App
