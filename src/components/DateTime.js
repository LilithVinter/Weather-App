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
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();


  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div className="dateTime">
      <span className ="date">
        {weekday} {day} {month}
      </span>
      <br/>
      <span className="time">
        {hours}:{minutes}
      </span>
    </div>
  );
}
