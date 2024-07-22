import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo.js";
import Forecast from "./Forecast.js";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  const [information, setInformation] = useState({ ready: false });

  function displayWeather(response) {
    setInformation({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt* 1000),
      coord: response.data.coord,
    });
  }

  function search() {
    let APIkey = "c819171fe0abdc14039af4ef5dda283b";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }

  function onSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (information.ready) {
    return (
      <div className="weather">
        <form form id="search-form" onSubmit={onSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                required
                className="search-input"
                id="search-input"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-1">
              <input
                type="submit"
                value="Search 🔎"
                className="search-button"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={information}/>
        <Forecast coordinates={information.coord} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
