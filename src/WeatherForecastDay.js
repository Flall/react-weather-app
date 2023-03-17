import React from "react";
import WeatherForecast from "./WeatherForecast";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={forecast[0].daily.condition.icon_url}
        size={36}
        alt={forecast[0].daily.condition.icon}
        className="float-left"
      />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemperature()}°</span> |{" "}
        <span className="WeatherForecast-temp-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
