
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import WeatherPanel from './WeatherPanel';
import Search from './Search';
import WeatherNavBar from './WeatherNavBar';


const WeatherComponent = ({ weatherData }) => {


    
    return (
       
        <div className='weather-component'>
         { weatherData &&  <WeatherPanel
            data={ weatherData } 
            />}
        </div>
          
       
    );
};

export default WeatherComponent;