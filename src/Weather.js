import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
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
      <ul>
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
          <ul>
            <li>Precipitation</li>
            <li>Humidity</li>
            <li> Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
