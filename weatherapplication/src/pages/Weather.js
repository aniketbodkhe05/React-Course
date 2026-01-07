import { useEffect, useState } from "react";
import "./weather.css";

function Weather() {
  const [city, setCity] = useState("Pune");
  const [weatherdata, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

  const API_KEY = "64341f4120e1dc087b390acc9bc46afc";

  const fetchWeatherData = async () => {
    try {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();
      if (data.cod === "404") {
        setWeatherData(null);
        setError("Location not found. Please enter a valid city.");
        return;
      }

      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchWeatherData();
  };

  const handleRefresh = () => {
    setCity("Pune");
    setError("");
    fetchWeatherData();
  };

  return (
    <div className="App">
      <header className="header">Weather By Cities</header>
      <div className="container">
        {error && (
          <div className="error_box">
            <p className="error">{error}</p>
            <button
              type="button"
              className="refresh_btn"
              onClick={handleRefresh}
            >
              Refresh
            </button>
          </div>
        )}

        {weatherdata && (
          <>
            <h1 className="container_date">{formattedDate}</h1>
            <div className="weather_data">
              <h2 className="container_city">{weatherdata.name}</h2>
              <img className="container_img" src="/weather.jpg" alt="Weather" />
              <h2 className="container_degree">{weatherdata.main.temp}°C</h2>
              <h2 className="country_per">{weatherdata.weather[0].main}</h2>
              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter city name"
                  onChange={handleInputChange}
                />
                <button type="submit">Get</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Weather;
