import React, { useState } from "react";
import axios from "axios";

export default function searchEngine(props) {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
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
    <form id="search-form" onSubmit={onSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        required
        className="search-input"
        id="search-input"
        onChange={updateCity}
      />
      <input type="submit" value="Search 🔎" className="search-button" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
