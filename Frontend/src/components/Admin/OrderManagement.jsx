
import React, { useState } from 'react';

const OrderManagement = () => {
  const [status, setStatus] = useState('Processing');

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleMarkAsDelivered = () => {
    setStatus('Delivered');
    // Add logic here if you want to call an API or update DB
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Order Management</h1>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-700">ORDER ID</th>
              <th className="px-6 py-4 font-semibold text-gray-700">CUSTOMER</th>
              <th className="px-6 py-4 font-semibold text-gray-700">TOTAL PRICE</th>
              <th className="px-6 py-4 font-semibold text-gray-700">STATUS</th>
              <th className="px-6 py-4 font-semibold text-gray-700">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="px-6 py-4 text-blue-600 font-medium">#12312321</td>
              <td className="px-6 py-4 text-gray-700">John Doe</td>
              <td className="px-6 py-4 text-gray-700">$110</td>
              <td className="px-6 py-4 text-gray-700">
                <select
                  value={status}
                  onChange={handleStatusChange}
                  className="border rounded px-3 py-1"
                >
                  <option>Processing</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={handleMarkAsDelivered}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Mark as Delivered
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;




