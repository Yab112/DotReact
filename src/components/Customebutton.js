import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CustomButton = ({ label, onClick, variant = "primary", size = "medium", icon, }) => {
    // Define custom styles based on variant and size
    const baseStyles = "flex items-center justify-center rounded-lg focus:outline-none transition duration-300";
    const variantStyles = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
        secondary: "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700",
        outline: "border border-gray-500 text-gray-500 hover:bg-gray-100 active:bg-gray-200",
    };
    const sizeStyles = {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg",
    };
    return (_jsxs("button", { onClick: onClick, className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`, children: [icon && _jsx("span", { className: "mr-2", children: icon }), label] }));
};
export default CustomButton;
