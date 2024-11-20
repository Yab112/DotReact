import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Header = () => (_jsxs("header", { className: "flex p-3 justify-between items-center px-10 backdrop-blur-2xl ", children: [_jsx("h2", { className: "text-4xl font-extrabold tracking-wider hover:text-teal-400 cursor-pointer transition-colors", children: _jsx(Link, { to: "./", children: "PapuCorp." }) }), _jsxs("nav", { className: "flex gap-5 list-none text-lg font-semibold", children: [_jsxs("li", { className: "relative group cursor-pointer", children: [_jsx("span", { className: "transition-colors group-hover:text-teal-400", children: _jsx(Link, { to: "/", children: "Home" }) }), _jsx("span", { className: "absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" })] }), _jsxs("li", { className: "relative group cursor-pointer", children: [_jsx("span", { className: "transition-colors group-hover:text-teal-400", children: _jsx(Link, { to: "/About", children: "About" }) }), _jsx("span", { className: "absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" })] }), _jsxs("li", { className: "relative group cursor-pointer", children: [_jsx("span", { className: "transition-colors group-hover:text-teal-400", children: _jsx(Link, { to: "/enterprise", children: "Enterprise" }) }), _jsx("span", { className: "absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" })] }), _jsxs("li", { className: "relative group cursor-pointer", children: [_jsx("span", { className: "transition-colors group-hover:text-teal-400", children: _jsx(Link, { to: "/support", children: "Support" }) }), _jsx("span", { className: "absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" })] })] })] }));
export default Header;
