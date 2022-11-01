import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search-engine">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Vancouver</h1>
      <ul className="weather-list">
        <li>Tuesday 1pm</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly_cloudy"
          />
          6 degrees
        </div>
        <div className="col-6">
          <ul className="weather-units">
            <li>Precipitation</li>
            <li>Humidity</li>
            <li> Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
