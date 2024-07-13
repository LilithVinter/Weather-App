import React from "react";

export default function Weathers() {
  return (
    <div>
      <main className="weatherApp">
        <div className="toggle">
          <label className="unit-switch">
            <span className="unit-text">°C</span>
            <input type="checkbox" name="unitsCheckbox" id="unitToggle" />
            <span className="toggle-button"></span>
            <span className="unit-text">°F</span>
          </label>
        </div>
        <div className="current-weather">
          <div>
            <h1 className="current-city" id="city">
              Find Your City's Weather
            </h1>
            <p className="current-details">
              <strong id="humidity"> </strong>
              <strong id="wind-speed"> </strong>
              <br />
              <span id="status"> </span>
            </p>
          </div>
          <div className="current-temperature">
            <div id="current-temperature-icon"></div>
            <span id="current-temperature-value"> </span>
            <span id="current-temperature-unit"> </span>
          </div>
        </div>
        <h2 className="weatherForecast">🔮Week ahead</h2>
        <div id="forecast"></div>

        <div id="cityList">
          <div className="cities" id="default">
            <h3 id="cityHeader"></h3>
            <div className="timezoneInfo">
              <div className="date"></div>
              <div className="time"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
