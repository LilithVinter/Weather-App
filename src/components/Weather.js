import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo.js";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  const [information, setInformation] = useState({});

  function displayWeather(response) {
    setLoaded(true);

    setInformation({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date((response.data.dt + response.data.timezone) * 1000),
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    let APIkey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
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
          <input type="submit" value="Search 🔎" className="search-button" />
        </div>
      </div>
    </form>
  );

  if (loaded) {
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
      </div>
    );
  } else {
    return form;
  }
}
