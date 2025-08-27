function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-1">WeatherApp &copy; 2025</p>
        <small>
          Powered by{" "}
          <a
            href="https://openweathermap.org/"
            className="text-white text-decoration-underline"
          >
            OpenWeather
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
