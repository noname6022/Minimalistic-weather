import React, {useState, useEffect} from 'react';
import LocationIcon from '../media/LocationIcon';
import "./styles/MainStyles.css";


import {WeatherBackend} from "./logic";

export const Main = () => {
  const {date, month, year, city, weatherData, setWeatherData} = WeatherBackend();



if (weatherData){
  <div>
    <h1>Loading...</h1>
    </div>
}

  return (
   
    <div> 
      { weatherData && (
        <div>
        <div className='DateAndLocationContainer'>
            <div className='LocationBlock'>
                <LocationIcon/>
                <h1>{weatherData.name}</h1>
            </div>
            <div className='DateBlock'>
            <h4>{date}/{month}/{year}</h4>
            </div>
        </div>
        <div className='WeatherContainer'>
          <div className='WeatherText'>
            <div className='WeatherTextContainer'>
            <h1>
            {Math.round(weatherData.main.temp)}°C
            </h1>
            </div>
            <div className='WeatherInfoContainer'>
            <h3>{weatherData.weather[0].main}</h3>
            </div>
          </div>
            <h2 className='WeatherBackText'>
            {Math.round(weatherData.main.temp)}°C
            </h2>
            <div>
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="imgicon"/>
            </div>

        </div>
       </div>
 )}
    </div> 
   
  )
}
export default Main;
