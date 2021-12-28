import React, { useState, useEffect } from "react";
import axios from "axios";

function Header() {
  //put weather info in state, update weather info and put it into a variable
  // const getWeather = (feelsLike, weather, icon) => {
      
  // }
  const [weatherData, setWeatherData] = useState();

  useEffect(()=> {
    axios.get("https://api.openweathermap.org/data/2.5/find?q=columbus&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a")
      .then((response) => {
          console.log("response: ",response.data.list[0]);

          let feelsLike = response.data.list[0].main.feels_like;
          let weather = response.data.list[0].weather[0].description;
          let icon = response.data.list[0].weather[0].icon;

          console.log('variables: ', {feelsLike, weather, icon});

          setWeatherData({feelsLike, weather, icon});
          // return {feelsLike, weather, icon};
      })
      .catch(err => console.log(err));
  },[])

  //&#8457
  console.log('weatherData: ', weatherData);

  return (
    <header className="jumbotron bg-dark text-danger">
      <h1 className="display-3">Work Day Scheduler</h1>
      <p id="currentDay" className="lead"></p>
      <p>Feels like: {weatherData?.feelsLike}&deg;F</p>
      <img id="wIcon" src={`https://openweathermap.org/img/wn/${weatherData?.icon}@2x.png`} alt={weatherData?.weather}></img>
      <p>Current conditions: {weatherData?.weather}</p>
    </header>
  );
}

export default Header;