import React, { useState } from "react";
import WeatherApi from "../api/WeatherApi.jsx"; // büyük harf A ve doğru dosya yolu
import WeatherCardList from "../components/WeatherCardList.jsx";

function Home() {
  const [weatherData, setWeatherData] = useState([]);

  return (
    <div>
      <WeatherApi setWeatherData={setWeatherData} />
      <WeatherCardList weatherData={weatherData} />
    </div>
  );
}

export default Home;
