import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import { MovieProvider } from "../context/MoviesContext";



const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col"> 
        
        <MovieProvider>
            <HeroSection />
        </MovieProvider>,
    </div>
  );
};

export default Home;
