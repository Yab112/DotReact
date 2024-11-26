import React from "react";

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  return (
    <div className="text-center h-screen flex justify-center items-center">
      
      <div>
        <h1 className="text-2xl font-bold">Welcome, Admin!</h1>
        <button
          onClick={onLogout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
