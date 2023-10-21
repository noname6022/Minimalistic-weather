import React from "react";
import SunIcon from "../../media/Sun";
import PartCloudsDay from "../../media/PartCloudsDay";
import PartCloudsNight from "../../media/PartCloudsNight";
import { WeatherBackend } from "../logic";
import ScClouds from "../../media/ScClouds";
import BrokenClouds from "../../media/BrokenClouds";
import RainIcon from "../../media/Rain";
import TunderStormIcon from "../../media/TunderStorm";
import SnowIcon from "../../media/Snow";
import MistIcon from "../../media/Mist";
import UnknownClouds from "../../media/Unknown";

const WeatherIcons = () => {
  const { weatherData } = WeatherBackend();
  if (weatherData.weather) {
    const { main } = weatherData.weather[0];
    switch (main) {
      //clear sky
      case "01d":
      case "01n":
        return <SunIcon />;
      //few clouds Day and night
      case "02d":
        return <PartCloudsDay />;
      case "02n":
        return <PartCloudsNight />;
      //scattered clouds
      case "03d":
      case "03n":
        return <ScClouds />;
      //broken clouds
      case "04d":
      case "04n":
        return <BrokenClouds />;
      //	shower rain and usual rain
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <RainIcon />;
      //thunderstorm
      case "11d":
      case "11n":
        return <TunderStormIcon />;
      // snow
      case "13d":
      case "13n":
        return <SnowIcon />;
      //mist
      case "50d":
      case "50n":
        return <MistIcon />;
      //unknown
      default:
        return <UnknownClouds />;
    }
  }
  return null;
};

export default WeatherIcons;