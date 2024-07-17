import React, { useState } from "react";

export default function WeatherDescription(props) {
  const [unit, setUnit] = useState("metric");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function fahrenheit() {
    return (props.unit * 9) / 5 + 32;
  }

  if (unit === "metric") {
    return (
      <div className="weatherDescription">
        <div className="row">
          <div className="col-6">
            <span className="temperature">{Math.round(props.unit)}</span>
            <span className="temperatureUnit">
              {" "}
              °C |{" "}
              <a href="/" className="link" onClick={showFahrenheit}>
                °F
              </a>
            </span>
          </div>
          <div className="col-6">
            <ul className="additionalInfo">
              <li>Humidity: {props.unit} %</li>
              <li>Wind: {props.unit} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="weatherDescription">
        <div className="row">
          <div className="col-6">
            <span className="temperature">{Math.round(fahrenheit())}</span>
            <span className="temperatureUnit">
              <a href="/" className="link" onClick={showCelcius}>
                {" "}
                °C{" "}
              </a>
              | °F
            </span>
          </div>
          <div className="col-6">
            <ul className="additionalInfo">
              <li>Humidity: {props.unit} %</li>
              <li>Wind: {props.unit} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
