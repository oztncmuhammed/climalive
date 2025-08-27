import React from "react";

function WeatherCard({ name, temp, description }) {
  return (
    <div className="card text-center m-2 shadow-sm" style={{ width: "12rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="Açıklama"
          className="mb-2"
        />
        <p className="card-text">{temp}</p>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
