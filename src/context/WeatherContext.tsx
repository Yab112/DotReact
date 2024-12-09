import React, { createContext, useContext, useState } from "react";
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

async function  fetchWeatherData(city: string) {
  const apiKey = "20da3ca5c9msh904e91bdd47e22fp10fb6cjsn38733084cec5";
    const apiHost = "open-weather13.p.rapidapi.com";
    
    const response = await fetch(
      `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
      {
        headers: {
          "X-Rapidapi-Key": apiKey,
          "X-Rapidapi-Host": apiHost,
        },
      }
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch weather data. Please try again.");
    }
  
    return response.json();
}

