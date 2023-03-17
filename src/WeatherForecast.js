import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
import Weather from "./Weather";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  let apiKey = `1c0f6e49a911db65307b85186bd4t6oe`;
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;

  axios.get(apiUrl).then(handleResponse);
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
