import React, { useState } from "react";
import { FaCalendarAlt, FaGlobe, FaStar } from "react-icons/fa";
import Header from "./Header";
import { useMovieContext } from "../context/MoviesContext";
import ReactLoading from "react-loading";

const HeroSection: React.FC = () => {
  const { getMovies, movies, loading, error } = useMovieContext();
  const [query, setQuery] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      await getMovies(query);
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://media.thepopverse.com/media/poster-a-w44b4y11qxsetkjigdrlpxxdgy.jpg')",
      }}
    >
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow gap-6 text-center">
        <h1 className="text-5xl font-bold drop-shadow-md">
          Discover Your Next Favorite Movie
        </h1>
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto"
        >
          <input
            type="text"
            placeholder="Search for a movie"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-3 rounded-lg w-full sm:w-[60rem] text-black focus:outline-none focus:ring-4 border-slate-200 border-1 text-center"
          />
          <button
            type="submit"
            className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-800 transition-all"
          >
            Search
          </button>
        </form>
        {loading && <ReactLoading type="balls" color="#0000FF"
                height={100} width={140} />}
        {error && <p className="text-red-500">{error}</p>}

        {/* Movie Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 mx-10">
          {movies &&
            movies.map(
              (movie: {
                id: string;
                title: string;
                year: number;
                type: string;
                image: string;
                image_large: string;
                api_path: string;
                imdb: string;
              }) => (
                <div
                  key={movie.id}
                  className="bg-gray-800 p-4 rounded-lg flex flex-col w-[350px] h-[510px] shadow-lg transition-transform hover:scale-105"
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-[200px] object-cover rounded-t-lg"
                  />
                  <div className="flex-grow p-2 text-left">
                    <h3 className="text-xl font-bold text-center text-white truncate">
                      {movie.title}
                    </h3>
                    <div className="mt-4 text-gray-300 space-y-2">
                      <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-md">
                        <FaCalendarAlt className="text-blue-400 text-lg" />
                        <span className="font-semibold text-white">Year:</span>
                        <span className="text-sm">{movie.year}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-md">
                        <FaStar className="text-yellow-500 text-lg" />
                        <span className="font-semibold text-white">Type:</span>
                        <span className="text-sm capitalize">{movie.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <a
                      href={movie.imdb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-sm flex items-center gap-1"
                    >
                      <FaGlobe className="text-green-500" />
                      IMDb
                    </a>
                    <a
                      href={movie.api_path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-800 transition-all text-sm"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
