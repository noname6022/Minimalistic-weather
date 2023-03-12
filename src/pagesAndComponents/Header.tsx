import React from 'react';
import "./styles/HeaderStyles.css";
import Logo from "../media/Logo";
import {WeatherBackend} from "./logic";

export const Header = () => {
  const {date, month, year, city, setCity, weatherData, setWeatherData} = WeatherBackend()

  return (
    <div>

    </div>
  )
}
