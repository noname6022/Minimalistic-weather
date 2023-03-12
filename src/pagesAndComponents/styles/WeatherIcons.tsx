import React from "react";
import SunIcon from "../../media/Sun";
import PartCloudsDay from "../../media/PartCloudsDay";
import PartCloudsNight from "../../media/PartCloudsNight";
import {WeatherBackend} from "../logic";

 const WeatherIcons = () => {
    const {weatherData} = WeatherBackend()
    const { main } = weatherData.weather[0];
    switch (main) {
        //clear sky
      case "01d":
      case "01n": 
      return <SunIcon/>;
        //few clouds Day and night
      case "02d":
        return <PartCloudsDay/>;
    case "02n":
        return <PartCloudsNight/>;
    //scattered clouds
    case "03d":
    case "03n": 
    return <SunIcon/>;
    //broken clouds
    case "04d":
    case "04n":  
    return <SunIcon/>;
    //	shower rain and usual rain
    case "09d":
    case "09n":  
    case "10d":
    case "10n":  
    return <SunIcon/>;
    //thunderstorm
    case "11d":
    case "11n":  
    return <SunIcon/>;
    // snow
    case "13d":
    case "13n":  
    return <SunIcon/>;
    //mist
    case "50d":
    case "50n":  
    return <SunIcon/>;
    //unknown
        default:
        return <img src="unknown.svg" alt="unknown" />;
    }
    
  }
  export default WeatherIcons