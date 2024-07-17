import React from "react";
import DateTime from "./DateTime.js";
import WeatherIcon from "./WeatherIcon";
import WeatherDescription from "./WeatherDescription";

export default function WeatherInfo(props){
  return (
    <div className="weatherInfo">
      <h2 className="cityName">
        {props.data.city} , {props.data.country}
      </h2>
      <div className="row">
        <div className="col-6">
          <div className="weatherGraphic">
            <WeatherIcon code={props.data.icon} width={100} height={100} />
            <p> {props.data.description}</p>
          </div>
        </div>
        <div className="col-6">
          <DateTime date={props.data.date} />
        </div>
      </div>
      <WeatherDescription unit={props.data.temperature} />
    </div>
  );
}