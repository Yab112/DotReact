import React, { useState } from "react";
import { useWeatherContext } from "../context/WeatherContext";
import { FaTemperatureHigh, FaWind, FaTint } from "react-icons/fa";

const WeatherPage: React.FC = () => {
  const { weather, loading, error, getWeather } = useWeatherContext();
  const [city, setCity] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      getWeather(city);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 text-slate-700"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/1338636615/photo/north-sea-vesterhavet-denmark.jpg?s=2048x2048&w=is&k=20&c=kpkzH9KBde4q1rNDr4A35GVTcXR5JQvqocXAetcBOGQ=")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.8,
      }}
    >
    <h1 className="text-5xl font-bold mb-4 text-slate-200">Weather Finder</h1>
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto"
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-3 rounded-lg w-full sm:w-[60rem] text-black focus:outline-none focus:ring-4 focus:none border-slate-200 border-1 text-center"
        />  
        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-800 transition-all"
        >
          Search
        </button>
      </form>

      {loading && (
        <div className="bg-white/10 text-gray-100 shadow-lg rounded-lg p-6 w-full backdrop-blur-lg h-48 animate-pulse">
          <div className="h-8 bg-gray-700 rounded mb-6 w-2/3 mx-auto"></div>
          <div className="grid grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
              <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gray-700 rounded"></div>
              <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
              <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
              <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      )}

      {error && <p className="text-lg text-red-300">{error}</p>}

      {!loading && weather && (
        <div className="bg-white/10 text-gray-100 shadow-lg rounded-lg p-6 w-full backdrop-blur-lg h-48">
          <h2 className="text-4xl mb-6 text-center text-yellow-400 font-bold font-sans">
            {weather.name}, {weather.sys.country}
          </h2>
          <div className="grid grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-3">
              <FaTemperatureHigh className="text-3xl text-orange-400" />
              <p className="text-xl font-medium text-gray-50">
                Temp: <span className="font-bold text-yellow-300">{weather.main.temp}°F</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="h-12 w-12"
              />
              <p className="text-xl font-medium capitalize text-gray-50">
                {weather.weather[0].description}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaTint className="text-3xl text-cyan-300" />
              <p className="text-xl font-medium text-gray-50">
                Humidity: <span className="font-bold text-yellow-300">{weather.main.humidity}%</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaWind className="text-3xl text-green-400" />
              <p className="text-xl font-medium text-gray-50">
                Wind: <span className="font-bold text-yellow-300">{weather.wind.speed} mph</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
