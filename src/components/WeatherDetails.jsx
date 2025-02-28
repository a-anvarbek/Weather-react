import React from "react";

const WeatherDetails = ({ data }) => {
  return (
    <>
      <div className="country">
        <h1>
          Weather in <span id="city">{data.name}</span>
        </h1>
      </div>

      <div className="temperature">
        <h2>
          <span id="temp">{data.main.temp}</span>°C
        </h2>
      </div>

      <div className="img">
        <img
          id="weatherIcon"
          src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
        />
        <span id="weather">{data.weather[0].description}</span>
      </div>

      <div className="details">
        <ul>
          <li>
            Humidity: <span id="humidity">{data.main.humidity}</span>%
          </li>
          <li>
            Wind speed: <span id="windSpeed">{data.wind.speed}</span> m/s
          </li>
        </ul>
      </div>
    </>
  );
};

export default WeatherDetails;
