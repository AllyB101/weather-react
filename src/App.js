import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <h1> Weather App </h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/AllyB101/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Allende Bennett
          </a>{" "}
          and is open-sourced code on
        </footer>

        <a
          href="https://github.com/AllyB101/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Github
        </a>
      </div>
    </div>
  );
}
