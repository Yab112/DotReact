import React, { createContext, useContext, useState } from "react";
import { fetchWeatherData } from "../../services/weatherService";

interface WeatherContextType {
  weather: any;
  loading: boolean;
  error: string | null;
  getWeather: (city: string) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getWeather = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeatherData(city);
      setWeather(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, loading, error, getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
};
