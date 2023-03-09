
import React from 'react';
import axios from 'axios';
import { useState } from 'react'




const WeatherPanel = ({ data }) => {

    
    const icons = data.weather?.[0].icon
    let icon= icons + ".svg"

    
    
    const [ isCelsius,setIsCelsius] = useState(true)
    

    return (
        <div>
             <img className='panel-img ' src={icon} alt="imagen de clima" />
        <div className='weather-panel '>
            <div className='base'>
            <div className='panel-info'>

                
    
            <h1 className='panel-tittle-temp'> { isCelsius ? Math.round(data.main.temp - 273.15) : Math.round(( data.main.temp -273.15 ) * 1.8 + 32) }{ isCelsius ? "°C" : "°F" }</h1>
            
            <div className='panel-text-temp'>
            <h3><span>Viento: </span>{ data.wind.speed }<span> m/s</span></h3>
            <h3><span>Nubes: </span>{ data.clouds.all }</h3>
            <h3><span>Presion: </span>{ data.main.pressure }<span> hPa</span> </h3>
            </div>
            </div>
            
            
            
            
            {/* <img className='panel-img' src={icon} alt="imagen de clima" /> */}
           

            </div>
            
            <div className='panel-info-base'>
            <h2>{ data.name }</h2>
            <h3 className='panel-description'>{ data.weather?.[0].description }</h3>
            
            </div>

            
           
            </div>

           

            <div className='weather-button'>
            { data && <button className='weather-button-letter' onClick={ () => setIsCelsius( !isCelsius )}>{ isCelsius ? 'Cambiar a F°' : 'Cambiar a C°'}</button>}
            </div>
            
        
        </div>
    );
};



export default WeatherPanel;