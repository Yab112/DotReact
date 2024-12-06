import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const UserContext = createContext(undefined);
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", age: 25 },
        { id: 2, name: "Jane Smith", age: 30 },
        { id: 3, name: "Sam Wilson", age: 22 },
    ]);
    const editUser = (id, updatedUser) => {
        setUsers((prevUsers) => prevUsers.map((user) => user.id === id ? Object.assign(Object.assign({}, user), updatedUser) : user));
    };
    return (_jsx(UserContext.Provider, { value: { users, editUser }, children: children }));
};
