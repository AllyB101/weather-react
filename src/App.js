import React from "react";
import WeatherEngine from "./WeatherEngine";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <h1>Weather Search Engine</h1>
        <WeatherEngine />
      </div>
    </div>
  );
}
