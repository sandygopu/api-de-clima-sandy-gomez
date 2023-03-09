import React from 'react';
import './App.css'
import axios from 'axios'
import WeatherComponent from './components/WeatherComponent'
import WeatherNavBar from './components/WeatherNavBar'
import Search from './components/Search'
import { useState, useEffect } from 'react'
import { load } from './components/load';


window.addEventListener('load', function () {
  load()
})

function App() {
  const [count, setCount] = useState();


  const [ weatherData, setWeatherData ] = useState();
  const [ cityData, setCityData ] = useState("lima");


  useEffect ( () => {

        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${ cityData }&lang=sp&appid=d15c708ca71d94235881ae8830a93c15`)
        .then( resp => setWeatherData(resp.data))
        .catch( error => { console.error(error)})
   
   }, [cityData])
  


    
   

  return (
    <div className="App">

      
      <WeatherNavBar 
      setCityData = { setCityData } 
      />

      
      <div className='App-container'>
      
  
      <WeatherComponent
      weatherData={weatherData}/>

      </div>
  
      
    </div>
  )
}

export default App

