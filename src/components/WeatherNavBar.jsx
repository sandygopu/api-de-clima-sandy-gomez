
import React, { useEffect, useState } from 'react';
import Search from './Search';
import App from '../App';
import WeatherPanel from './WeatherPanel';


const WeatherNavBar = ({ setCityData }) => {



    


   
    const [ theme, setTheme ] = useState(true);



    if (theme) {
        
        console.log("lighMode")
    }else{
       
        console.log("darkMode")
        
        
    }

        
   
   



    return (
        <div className='navbar'>
            <div className='navbar_container'>
                <h2 className='navbar_item_1' >Weather app</h2>
                <div className='navbar_item_2'>
                <Search newLocation={ setCityData }/>
                </div>
                
                <div className='nav-btn navbar_item_3  change-theme'>
                <i  id='theme-button' className='dark-mode bx bxs-toggle-left' onClick={ () => setTheme( !theme )}></i>


            
                </div>
               

            </div>
            
        </div>
    );
};

export default WeatherNavBar;