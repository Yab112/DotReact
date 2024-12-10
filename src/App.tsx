
import React from 'react';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="flex gap-4 flex-col  bg-black ">
      <Home/>
      <ToastContainer/>
    </div>
  );
}

export default App;
