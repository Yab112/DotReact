import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Enterprise from './pages/Enterprise';
import Support from './pages/Support';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Horzotalline from './components/Horzotalline';
const App = () => {
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Header, {}), _jsx(Horzotalline, {}), _jsx("main", { className: "flex-grow mt-4 mb-4", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/About", element: _jsx(About, {}) }), _jsx(Route, { path: "/enterprise", element: _jsx(Enterprise, {}) }), _jsx(Route, { path: "/support", element: _jsx(Support, {}) })] }) }), _jsx(Horzotalline, {}), _jsx(Footer, {})] }));
};
export default App;
