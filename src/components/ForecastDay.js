import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function ForecastDay(props) {
function maxTemp(){
  let temperature = Math.round(props.data.temp.max);
  return `${temperature}°C`;
}

function minTemp() {
  let temperature = Math.round(props.data.temp.min);
  return `${temperature}°C`;
}

function day(){
  let date = new Date(props.data.dt + props.data.timezone * 1000);
  let day = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[day];
}

  return (
    <div>
      <div className="forecastDay">{day()} </div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        width={50}
        height={50}
      />
      <div className="forecastTemperature">
        <span className="minTemp">{minTemp()}</span>
        <span className="maxTemp"> {maxTemp()}</span>
      </div>
    </div>
  );
}
