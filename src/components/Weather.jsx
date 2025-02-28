import React, { useState, useEffect } from "react";
import Search from "./Search";
import WeatherDetails from "./WeatherDetails";

const apiKey = import.meta.env.VITE_API_KEY;

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Tashkent");

  const fetchWeatherApi = async (cityName) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeatherApi(city);
  }, []);

  return (
    <>
      <Search setCity={setCity} fetchWeatherApi={fetchWeatherApi} />
      {weatherData && <WeatherDetails data={weatherData} />}
    </>
  );
};

export default Weather;
