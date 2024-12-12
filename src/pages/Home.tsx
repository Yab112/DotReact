import React from 'react'
import Header from '../components/Header'
import Hero from '../components/HeroSection'
import BookList from '../components/BookList'
import Footer from '../components/Footer'
import { Toaster } from "../components/ui/toaster"

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-900">
      <Header />
      <Hero />
      <BookList />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App

