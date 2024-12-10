import React, { createContext, useContext, useState } from "react";

interface MoviesContextType {
  movies: any;
  loading: boolean;
  error: string | null;
  getMovies: (moviename: string) => Promise<void>;
}

const MovieContext = createContext<MoviesContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [movies, setMovies] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getMovies = async (moviename: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchMoviesData(moviename);
      setMovies(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieContext.Provider value={{ movies, loading, error, getMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

async function fetchMoviesData(query: string) {
  const apiKey = "20da3ca5c9msh904e91bdd47e22fp10fb6cjsn38733084cec5";
  const apiHost = "imdb-api12.p.rapidapi.com";

  const response = await fetch(`https://${apiHost}/search?query=${encodeURIComponent(query)}`, {
    method: 'GET',
    headers: {
      "X-Rapidapi-Key": apiKey,
      "X-Rapidapi-Host": apiHost,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movies data. Please try again.");
  }
  const data = await response.json();
  return data.results;
}  
