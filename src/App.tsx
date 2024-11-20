
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Enterprise from './pages/Enterprise';
import Support from './pages/Support';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Horzotalline from './components/Horzotalline';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header />
      <Horzotalline />
      <main className="flex-grow mt-4 mb-4"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Horzotalline />
      <Footer />
    </div>
  );
};

export default App;

