import React, { useEffect } from 'react';
import './index.css';
import { Main } from './pagesAndComponents/Main';
import {WeatherBackend} from "./pagesAndComponents/logic";
import Logo from "./media/Logo";
import LocationIcon from './media/LocationIcon';
import axios from 'axios';

function App() {
  const {date, month, displayError, year, city, setCity, apiKey, weatherData, setWeatherData, handleSubmit} = WeatherBackend();
  useEffect(() => {
    const syntheticEvent = { preventDefault: () => {} } as React.FormEvent<HTMLFormElement>;
    handleSubmit(syntheticEvent);
  }, []);


  return (
    <>
              <div className='HeaderElementsContainer'>
            <a href='https://www.google.com'><Logo/></a>
            <div>
              <form onSubmit={handleSubmit}>
                
              
                <input className="HeaderInputStyle HeaderInputIcon"
                        placeholder='Enter city'
                          
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}/>

                      </form>
                </div>
              </div>
      {displayError && <h1>Error: City not found</h1>}
      
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
            <h3>{weatherData.weather[0].description}</h3>
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
   

    </>
  );
}

export default App;
