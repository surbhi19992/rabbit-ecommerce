
import React from 'react';
import { Link } from 'react-router-dom';

const AdminHomePage = () => {
  const orders = Array(5).fill({
    _id: 123123,
    user: { name: "John Doe" },
    totalPrice: 110,
    status: "Processing",
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-10">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="p-6 shadow rounded-lg bg-white">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-2xl">$10000</p>
        </div>

        <div className="p-6 shadow rounded-lg bg-white">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-2xl">200</p>
          <Link to="/admin/orders" className="text-blue-500 hover:underline text-sm">
            Manage Orders
          </Link>
        </div>

        <div className="p-6 shadow rounded-lg bg-white">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-2xl">100</p>
          <Link to="/admin/products" className="text-blue-500 hover:underline text-sm">
            Manage Products
          </Link>
        </div>
      </div>

      {/* Recent Orders */}
      <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-700">
              <th className="px-6 py-3 border-b">ORDER ID</th>
              <th className="px-6 py-3 border-b">USER</th>
              <th className="px-6 py-3 border-b">TOTAL PRICE</th>
              <th className="px-6 py-3 border-b">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className="hover:bg-gray-50 text-sm">
                <td className="px-6 py-4 border-b">{order._id}</td>
                <td className="px-6 py-4 border-b">{order.user.name}</td>
                <td className="px-6 py-4 border-b">${order.totalPrice}</td>
                <td className="px-6 py-4 border-b">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHomePage;
