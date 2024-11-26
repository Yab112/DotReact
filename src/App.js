import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
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
import Support from "./pages/Support";
import Home from "./pages/Home";
const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);
    const usernameRegex = /^[a-zA-Z0-9]{4,12}$/;
    const passwordRegex = /^[a-zA-Z0-9@#$%]{6,20}$/;
    const handleLogin = (username, password) => {
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
        }
        else if (username === "user" && password === "password") {
            setIsLoggedIn(true);
            setIsAdmin(false);
            toast.success("Logged in as User!");
            console.log("Logged in as User");
        }
        else {
            toast.error("Invalid Credentials! Please try again.");
            console.log("Invalid Credentials.");
        }
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        toast.info("You have logged out.");
    };
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Header, { onLogout: handleLogout }), _jsx(Horzotalline, {}), _jsx("main", { className: "flex-grow mt-4 mb-4", children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(MainLayout, {}), children: [_jsx(Route, { index: true, element: !isLoggedIn ? (_jsx(LoginForm, { onLogin: handleLogin })) : isAdmin ? (_jsx(Navigate, { to: "/admin-dashboard", replace: true })) : (_jsx(Navigate, { to: "/home", replace: true })) }), _jsx(Route, { path: "/admin-dashboard", element: isLoggedIn && isAdmin ? (_jsx(AdminDashboard, { onLogout: handleLogout })) : (_jsx(Navigate, { to: "/", replace: true })) }), _jsx(Route, { path: "/home", element: isLoggedIn && !isAdmin ? (_jsx(Home, { onLogout: handleLogout })) : (_jsx(Navigate, { to: "/", replace: true })) }), _jsx(Route, { path: "/about", element: isLoggedIn ? _jsx(About, {}) : _jsx(Navigate, { to: "/", replace: true }) }), _jsx(Route, { path: "/enterprise", element: isLoggedIn ? _jsx(Enterprise, {}) : _jsx(Navigate, { to: "/", replace: true }) }), _jsx(Route, { path: "/support", element: isLoggedIn ? _jsx(Support, {}) : _jsx(Navigate, { to: "/", replace: true }) })] }) }) }), _jsx(Horzotalline, {}), _jsx(Footer, {}), _jsx(ToastContainer, {})] }));
};
const MainLayout = () => {
    return (_jsx("div", { children: _jsx(Outlet, {}) }));
};
export default App;
