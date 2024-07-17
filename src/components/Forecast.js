import React from "react";
import WeatherIcon from "./WeatherIcon";
import ForecastStyles from "./ForecastStyles.css";

export default function Forecast(){
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