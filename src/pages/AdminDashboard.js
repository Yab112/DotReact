import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AdminDashboard = ({ onLogout }) => {
    return (_jsx("div", { className: "text-center h-screen flex justify-center items-center", children: _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold", children: "Welcome, Admin!" }), _jsx("button", { onClick: onLogout, className: "mt-4 px-4 py-2 bg-red-500 text-white rounded", children: "Logout" })] }) }));
};
export default AdminDashboard;
