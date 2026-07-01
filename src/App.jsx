import React from 'react'
import "./App.css";

function App() {
  return (
    <div className='container'>
        <h1>Hello ClimaSense</h1>
        <p>Know the weather before you step outside.</p>
        <input type="text" placeholder='Enter city Name'/>
        <button>Search</button>
    </div>
  )
}

export default App
