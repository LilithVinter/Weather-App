import React from "react";
import DateTime from "./DateTime.js";

export default function WeatherInfo(props){
  return (
    <div className="weatherInfo">
      <h2 className="cityName">
        {props.data.city} , {props.data.country}
      </h2>
      <div className="row">
        <div className="col-6">
          <div className="weatherGraphic">
            <img src={props.data.icon} alt={props.data.description} />
            <p> {props.data.description}</p>
          </div>
        </div>
        <div className="col-6">
          <DateTime date={props.data.date} />
        </div>
      </div>
      <div className="weatherDescription">
        <div className="row">
          <div className="col-6">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="temperatureUnit">°C </span>
          </div>
          <div className="col-6">
            <ul className="additionalInfo">
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}