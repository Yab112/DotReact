import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "../components/ui/button";
export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (_jsxs("div", { className: "relative min-h-screen flex items-center justify-center overflow-hidden ", children: [_jsxs("div", { className: "relative z-10 text-center px-4 sm:px-6 lg:px-8", children: [_jsxs("h1", { className: `text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: ["Welcome to ", _jsx("span", { className: "text-blue-600", children: "Papucorp" })] }), _jsx("p", { className: `max-w-2xl mx-auto text-xl sm:text-2xl text-gray-600 mb-10 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: "Innovating the future, one solution at a time. I bring cutting-edge technology to solve real-world problems." }), _jsxs(Button, { size: "lg", className: `text-lg px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: ["Get Started", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] })] }), _jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" }), _jsx("div", { className: "absolute top-0 right-0 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" }), _jsx("div", { className: "absolute bottom-24 right-24 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" }), _jsx("style", { children: `
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        ` })] }));
}
