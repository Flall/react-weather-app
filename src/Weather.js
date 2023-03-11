import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
              id="search-bar"
            />
          </div>
          <div class="col-2">
            <button
              type="submit"
              value="Search"
              id="search-button"
              className="mt-1 w-100"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div class="col-2">
            <button
              type="submit"
              value="Location"
              className="mt-1 w-100"
              id="location-button"
            >
              <i className="fa-solid fa-location-dot" />
            </button>
          </div>
        </div>
      </form>
      <h1>Amsterdam</h1>
      <ul>
        <li>Saturday 19:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAb5JREFUeNrtmtuNgzAQRSmBElwCJbgESuBzy6AESnAJlEAJ/PJHOqAD73g10QJa8sJ4huUiXSlyHMX3jM34lXnvsysrAwAAAAAAAAAAAAAAAAAAAIDfwg8ff/sypIrkSD3Jb6jnOqGuyRI/0QGQCUtqHxh+pvBbezoAbLzbYXytLgWI3QCokTmpiWh8rUYtADbfH2h+/p7IVQGgBhWkKYH5u8bwnyoAcORTmp9DyEUBJOz2m8NBGkAjaD76i/EtAJzqvBJZCQCdIgBdUgDKoh+tF7wDoFUIoE0CgBc2XqnyFAAqYZNhtVjyMLT8OZTVoX3DMBiSI00kz5q4zMQA4KRy/rPZHxksVsbXCt8VewH0QuZzanxQ/Ud0a478I/Pz+mYPAInoFxzh/gWDr8idCYBj83Uk8z+94CMAQhmgZABTRAD+LD0gzDYNj31/gBbZQRuAavZ2PwrAIjtoAlCx8ZI0Hmx+kR00pMFuZt4nltMwEbpHfxQAMGmYCtsEY35T4ouhTPBRsRw+C4Brb4hcfksMm6LYFsfBCI7GcDiK43FckMAVGVySuto1OdwUBQAAAAAAAAAAAAAAAAAA+Pf6Bm5v6/1bJGiwAAAAAElFTkSuQmCC"
              alt="partly cloudy weather"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">4</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 70%</li>
            <li>Wind: 28 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
