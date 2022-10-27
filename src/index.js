import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherEngine from "./WeatherEngine";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1> Weather Search Engine</h1>

      <WeatherEngine />
      <a
        href="https://github.com/AllyB101/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Github
      </a>
    </div>
  </StrictMode>
);
