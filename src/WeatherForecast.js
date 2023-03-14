import React from "react";
import WeatherInfo from "./WeatherInfo";
import Weather from "./Weather";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="sunny icon"
            className="float-left"
          />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span> |{" "}
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
