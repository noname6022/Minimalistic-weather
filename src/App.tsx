import React, { useEffect } from 'react';
import './index.css';
import { Main } from './pagesAndComponents/Main';
import {WeatherBackend} from "./pagesAndComponents/logic";
import Logo from "./media/Logo";
import LocationIcon from './media/LocationIcon';
import CloseIcon from './media/CloseIcon';
import WeatherIcons from './pagesAndComponents/styles/WeatherIcons';
import axios from 'axios';
import SunIcon from "./media/Sun";
import PartCloudsDay from "./media/PartCloudsDay";
import PartCloudsNight from "./media/PartCloudsNight";
import ScClouds from "./media/ScClouds";
import BrokenClouds from "./media/BrokenClouds";
import RainIcon from "./media/Rain";
import TunderStormIcon from "./media/TunderStorm";
import SnowIcon from "./media/Snow";
import MistIcon from "./media/Mist";
import UnknownClouds from "./media/Unknown";

  function App() {
    const { date, month, displayError, year, closeModal, city, setCity, apiKey, weatherData, setWeatherData, handleSubmit } = WeatherBackend();
  useEffect(() => {
    const syntheticEvent = { preventDefault: () => {} } as React.FormEvent<HTMLFormElement>;
    handleSubmit(syntheticEvent);
  }, []);
    const getWeatherIcon = (description, timeOfDay) => {
        switch (description) {
            case 'clear sky':
                return  <SunIcon />;
            case 'few clouds':
              return timeOfDay === 'day' ? <PartCloudsDay /> : <PartCloudsNight />  ;
            case 'scattered clouds':
              return <ScClouds/>;
            case 'broken clouds':
                return <BrokenClouds />;
              case 'light rain':
                return <RainIcon />;
            case 'shower rain':
              return <RainIcon />;
            case 'rain':
                return <RainIcon />;
            case 'thunderstorm':
                return <TunderStormIcon />;
            case 'snow':
                return <SnowIcon />;
            case 'mist':
              return  <MistIcon/>;
            case 'smoke':
              return <BrokenClouds />;
            case 'haze':
              return <MistIcon/>;
            case 'dust':
              return <MistIcon/>;
            case 'fog':
              return <MistIcon/>;
            case 'sand':
                return <MistIcon />;
                case 'overcast clouds':
                  return timeOfDay === 'day' ? <PartCloudsDay /> : <PartCloudsNight />;
            default:
                return  <UnknownClouds /> ;
        }
    };

    const currentTime = new Date().getHours();
    const timeOfDay = currentTime >= 6 && currentTime < 18 ? 'day' : 'night';

    return (
        <>
            <div className='HeaderElementsContainer'>
                <a href='https://minw.netlify.app'><Logo/></a>
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
            { displayError && 
                <div className='ErrorModalWrapper' onClick={closeModal}>
                <div className='ErrorModalTextInfo'>
                    <div><h1>Error!</h1></div>
                    <div><h2>There could be several reasons...</h2></div>
          <div>
            <ol>
              <li> Issues with the server and databases.</li>
              <li> The city you entered may not exist or may have been entered incorrectly.</li>
              <li> An invalid value may have been entered.</li>
            </ol>
          </div>
          <div>
            <h2>To exit, press on the cross button or click an empty area.</h2>
          </div>
        </div>
        <button onClick={closeModal}><CloseIcon/></button>

      </div>

      }

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

            <h2 className='WeatherBackText'>
            {Math.round(weatherData.main.temp)}°C
            </h2>

        </div>            

          </div>       
           <div className='WeatherIcon'>
                        {getWeatherIcon(weatherData.weather[0].description, timeOfDay)}
                    </div>
       </div>
 )}
   

    </>
  );
}

export default App;
