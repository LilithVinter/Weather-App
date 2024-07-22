import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ForecastStyles.css";
import ForecastDay from "./ForecastDay.js";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let apiKey = "a5acb752426cd8188485c35694980e3a";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <h3 className="weekForecast">Week Forecast</h3>
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 7) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
