import React from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";
import "./ForecastStyles.css";

export default function Forecast(props){
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "c819171fe0abdc14039af4ef5dda283b";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse);
  
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Day </div>
          <WeatherIcon code="01d" width={50} height={50} />
          <div className="forecastTemperature">
            <span className="minTemp">Min Temp°</span>
            <span className="maxTemp"> Max Temp°</span>
          </div>
        </div>
      </div>
    </div>
  );
}