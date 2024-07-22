import React from "react";

export default function DateTime(props) {

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let weekday = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let day = props.date.getDate();

  return (
      <div className="dateTime">
        <span className="date">
          <br />
          {weekday} {day} {month}
        </span>
      </div>
  );
}
