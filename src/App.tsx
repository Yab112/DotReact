import React, { useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Horzotalline from "./components/Horzotalline";
import LoginForm from "./pages/LoginForm";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";
import Enterprise from "./pages/Enterprise";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import WeatherPage from "./pages/Weather";
import { WeatherProvider } from "./context/WeatherContext";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  

  const usernameRegex = /^[a-zA-Z0-9]{4,12}$/;
  const passwordRegex = /^[a-zA-Z0-9@#$%]{6,20}$/;

  const handleLogin = (username: string, password: string) => {
    console.log("Login Attempt:", { username, password });
    console.log("Regex Test:", usernameRegex.test(username), passwordRegex.test(password));
  
    if (!usernameRegex.test(username) || !passwordRegex.test(password)) {
      
      toast.error("Invalid username or password format! Please check your inputs."); // Show error toast
      console.log("Invalid username or password format.");
      return;
    }
  
    if (username === "admin" && password === "admin3") {
      setIsLoggedIn(true);
      setIsAdmin(true);
   
      toast.success("Logged in as Admin!"); 
      console.log("Logged in as Admin");
    } else if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      setIsAdmin(false);
   
      toast.success("Logged in as User!"); 
      console.log("Logged in as User");
    } else {
  
      toast.error("Invalid Credentials! Please try again.");
      console.log("Invalid Credentials.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);

    toast.info("You have logged out."); 
  };

  

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLogout={handleLogout} />
      <Horzotalline />
      <main className="flex-grow mt-4 mb-4">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Index Route - Handles Login */}
            <Route
              index
              element={
                !isLoggedIn ? (
                  <LoginForm onLogin={handleLogin} />
                ) : isAdmin ? (
                  <Navigate to="/admin-dashboard" replace />
                ) : (
                  <Navigate to="/home" replace />
                )
              }
            />

            {/* Admin Dashboard Route */}
            <Route
              path="/admin-dashboard"
              element={
                isLoggedIn && isAdmin ? (
                  <AdminDashboard onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />

            {/* Home Route */}
            <Route
              path="/home"
              element={
                isLoggedIn && !isAdmin ? (
                  <Home onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />

            {/* Other Protected Routes */}
            <Route
              path="/about"
              element={isLoggedIn ? <About /> : <Navigate to="/" replace />}
            />
            <Route
              path="/enterprise"
              element={isLoggedIn ? <Enterprise /> : <Navigate to="/" replace />}
            />
            <Route
              path="/weather"
              element={isLoggedIn ? 
              <WeatherProvider>
                <WeatherPage />
              </WeatherProvider> : 
              <Navigate to="/" replace />}
            />
          </Route>
        </Routes>
      </main>
      <Horzotalline />
      <Footer />
      <ToastContainer /> 
    </div>
  );
};

const MainLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
