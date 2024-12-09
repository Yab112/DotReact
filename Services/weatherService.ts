const fetchWeatherData = async (city: string) => {
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
  };
  
  export default fetchWeatherData;