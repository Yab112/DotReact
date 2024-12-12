import React from 'react'

const Hero: React.FC = () => {
  const userName =localStorage.getItem("name") || "Book Lover" 
  
  return (
    <section className="py-20 text-center bg-gray-100">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">Welcome,<span className='text-6xl text-cyan-500'> {userName}!</span></h1>
      <p className="text-sm max-w-2xl mx-auto text-gray-400">
        "The only thing you absolutely have to know is the location of the library." - Albert Einstein
      </p>
    </section>
  )
}

export default Hero

