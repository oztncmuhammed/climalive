import React, { useEffect, useState } from "react";
import WeatherApi from "../api/WeatherApi.jsx";
import WeatherCardList from "../components/WeatherCardList.jsx";
import Pagination from "@mui/material/Pagination";
import SearchBar from "../components/SearchBar.jsx";

function Home({ query, setQuery }) {
  const [weatherData, setWeatherData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const filteredData = weatherData.filter((item) =>
    item.name?.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="container mt-5">
      <SearchBar setQuery={setQuery} />
      <WeatherApi setWeatherData={setWeatherData} />
      <WeatherCardList weatherData={currentItems} />
      {totalPages > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
      )}
    </div>
  );
}

export default Home;
