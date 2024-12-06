import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

interface UserContextType {
  users: User[];
  editUser: (id: number, updatedUser: Partial<User>) => void;
}

interface UserProviderProps {
  children: ReactNode; 
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 3, name: "Sam Wilson", age: 22 },
  ]);

  const editUser = (id: number, updatedUser: Partial<User>) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      )
    );
  };

  return (
    <UserContext.Provider value={{ users, editUser }}>
      {children}
    </UserContext.Provider>
  );
};
