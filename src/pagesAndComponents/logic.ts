import React, {ChangeEvent, useState, useEffect} from 'react'
import axios from 'axios';

export const WeatherBackend = () => {
    const currentDate: Date = new Date();
    const [weatherData, setWeatherData] = useState<any>();
    const year: number = currentDate.getFullYear();
const month: number = currentDate.getMonth() + 1;
const date: number = currentDate.getDate();

const apiKey = process.env.REACT_APP_API_KEY; 

const [city, setCity] = useState("Tbilisi");
const [inputText, setInputText] = useState("");
const [displayError, setError] = useState<boolean>(false);

const closeModal = () => {
  setError(false);
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault();

  //Make the api call
     
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
.then(response => {
  setWeatherData(response.data);
  setError(false);
})
.catch(error => {
  console.log(error);
  setError(true);
});

}
/*const handleSearch = (e) => {
  if (e.key === "Enter") {
    setCity(e.target.value);
    setInputText("");
  }
};
*/



useEffect(() => {

}, []);

// Search bar Logic block


  return {date, month, year, setCity, apiKey, city, closeModal, displayError, setError, weatherData, inputText, handleSubmit, setInputText, setWeatherData}
}
