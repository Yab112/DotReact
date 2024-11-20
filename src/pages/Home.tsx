import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import OurTeam from '../components/OurTeam'
import image from "../../public/data"

const Home = () => {

  return (
    <div className="w-full"> 
      <HeroSection />
      <h2 className="text-5xl font-bold text-center    mb-8">Our Services</h2>
      <OurTeam images={image}/>
      
    </div>
  )
}

export default Home
