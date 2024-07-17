import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "sunny",
    "02d": "partlycloudy",
    "03d": "fog",
    "04d": "cloudy",
    "09d": "rainy",
    "10d": "rainy",
    "11d": "lightning-rainy",
    "13d": "snowy",
    "50d": "windy",

    "01n": "clear-night",
    "02n": "partlycloudy",
    "03n": "fog",
    "04n": "cloudy",
    "09n": "rainy",
    "10n": "rainy",
    "11n": "lightning-rainy",
    "13n": "snowy",
    "50n": "windy",
  };

  return (
    <WeatherSvg state={codeMapping[props.code]} width={props.width} height={props.height} />
  );
}
