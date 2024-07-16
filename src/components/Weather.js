import React from "react";

export default function Weather(){
  return (
    <div className="weather">
      <form form id="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              required
              className="search-input"
              id="search-input"
            />
          </div>
          <div className="col-1">
            <input type="submit" value="Search 🔎" className="search-button" />
          </div>
        </div>
      </form>
      <div className="information">
        <h2> City Name </h2>
        <ul>
          <li> Date and time </li>
          <li> Weather Icon </li>
          <li> Weather Description </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">6 °C | °F</div>
        <div className="col-6">
          <ul>
            <li>Humidity: %</li>
            <li>Wind: km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}