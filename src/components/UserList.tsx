import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

const UserList: React.FC = () => {
  const { users, editUser } = useUserContext();
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [updatedName, setUpdatedName] = useState<string>("");
  const [updatedAge, setUpdatedAge] = useState<number | string>("");

  const handleEdit = (user: { id: number; name: string; age: number }) => {
    setIsEditing(user.id);
    setUpdatedName(user.name);
    setUpdatedAge(user.age);
  };

  const handleSave = (id: number) => {
    if (updatedName.trim() && updatedAge) {
      editUser(id, { name: updatedName, age: Number(updatedAge) });
      setIsEditing(null); // exit edit mode
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md w-auto">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex  items-center mb-4 gap-24">
            {isEditing === user.id ? (
              <div className="flex gap-8">
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  className="border px-2 py-1 rounded-md"
                />
                <input
                  type="number"
                  value={updatedAge}
                  onChange={(e) => setUpdatedAge(e.target.value)}
                  className="border px-2 py-1 rounded-md"
                />
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded-md"
                  onClick={() => handleSave(user.id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-black px-4 py-1 rounded-md"
                  onClick={() => setIsEditing(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center w-full gap-12">
                <span className="font-semibold">
                  {user.name} ({user.age} years old)
                </span>
                <div>
                  <button
                    className="bg-green-500 text-white px-4 py-1 rounded-md mr-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
