
import React, { useState } from 'react';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'Admin',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Customer',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    if (!formData.name || !formData.email || !formData.password) return;

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
    };

    setUsers([...users, newUser]);
    setFormData({ name: '', email: '', password: '', role: 'Customer' });
  };

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-8 bg-white min-h-screen text-[15px]">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>

      {/* Add New User Form */}
      <div className="mb-10">
        <h3 className="font-semibold text-lg mb-4">Add New User</h3>
        <div className="space-y-6 max-w-md">
          <div>
            <label className="text-gray-700 block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-1"
            />
          </div>
          <div>
            <label className="text-gray-700 block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-1"
            />
          </div>
          <div>
            <label className="text-gray-700 block mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-1"
            />
          </div>
          <div>
            <label className="text-gray-700 block mb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-1"
            >
              <option value="Customer">Customer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button
            onClick={handleAddUser}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
          >
            Add User
          </button>
        </div>
      </div>

      {/* User Table */}
      <table className="w-full border-collapse text-[15px]">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-6 py-3 border-t border-b font-medium text-gray-700">NAME</th>
            <th className="px-6 py-3 border-t border-b font-medium text-gray-700">EMAIL</th>
            <th className="px-6 py-3 border-t border-b font-medium text-gray-700">ROLE</th>
            <th className="px-6 py-3 border-t border-b font-medium text-gray-700">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-3 font-medium">{user.name}</td>
              <td className="px-6 py-3">{user.email}</td>
              <td className="px-6 py-3">
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1"
                >
                  <option value="Customer">Customer</option>
                  <option value="Admin">Admin</option>
                </select>
              </td>
              <td className="px-6 py-3">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsersPage;
