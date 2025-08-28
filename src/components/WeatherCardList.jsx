import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherCardList({ weatherData }) {
  return (
    <div className="container">
      <div className="row g-0 gy-0">
        {weatherData.map((w, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <WeatherCard
              name={w.name}
              temp={w.main?.temp}
              description={w.weather?.[0]?.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherCardList;
