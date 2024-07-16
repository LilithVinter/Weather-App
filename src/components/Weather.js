import React from "react";

export default function Weather(){
  return (
    <div>
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