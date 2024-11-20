import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Eye, Download } from "lucide-react";
// Define the default props
const defaultProps = {
    src: '/default-image.png',
    alt: 'Default Image',
    width: 100,
    height: 100,
    title: 'Default Title',
    description: 'Default Description',
    category: 'Default Category',
};
const CardComponent = ({ src, alt, width, height, title, description, category, }) => {
    return (_jsxs(Card, { className: "overflow-hidden flex flex-col w-full sm:w-72 md:w-80 lg:w-96", children: [_jsxs(CardContent, { className: "p-0 relative group flex-grow", children: [_jsx("img", { src: src, alt: alt, className: "object-cover w-full h-72 transition-transform duration-300 group-hover:scale-105" }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10", children: _jsxs("div", { className: "flex space-x-2", children: [_jsxs(Button, { size: "sm", variant: "secondary", className: "flex items-center", children: [_jsx(Eye, { className: "mr-2 h-4 w-4" }), "View"] }), _jsxs(Button, { size: "sm", variant: "secondary", className: "flex items-center", children: [_jsx(Download, { className: "mr-2 h-4 w-4" }), "Download"] })] }) })] }), _jsxs(CardFooter, { className: "flex flex-col items-start p-4 bg-gray-50", children: [_jsx("h2", { className: "text-lg font-semibold mb-1", children: title }), _jsx("p", { className: "text-sm text-gray-600 mb-2", children: description }), _jsx("span", { className: "inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full", children: category })] })] }));
};
// Set defaultProps for the component
CardComponent.defaultProps = defaultProps;
export default CardComponent;
