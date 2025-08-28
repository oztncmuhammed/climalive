import React, { useEffect } from "react";
import city from "./citydata";

function WeatherApi({ setWeatherData }) {
  useEffect(() => {
    const fetchData = async () => {
      const results = await Promise.all(
        city.map(async (cityName) => {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=edadb27d86a74823ef1385871d0399b8&units=metric`
          );
          return res.json();
        })
      );
      setWeatherData(results);
    };
    fetchData();
  }, [setWeatherData]);

  return null;
}

export default WeatherApi;
