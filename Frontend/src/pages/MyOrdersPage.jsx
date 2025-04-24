
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date().toLocaleString(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "34567",
          createdAt: new Date().toLocaleString(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=3",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick = (orderId) => {
    console.log("Clicked order ID:", orderId); // ✅ confirm click
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 flex flex-col sm:flex-row gap-6">
      {/* Sidebar */}
      <div className="sm:w-1/4 bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-bold mb-2">John Doe</h2>
        <p className="text-gray-600 mb-4">John@example.com</p>
        <button className="w-full bg-red-500 text-white py-2 px-4 rounded">Logout</button>
      </div>

      {/* Orders Table */}
      <div className="sm:w-3/4 w-full">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
        <div className="relative shadow-md sm:rounded-lg overflow-hidden bg-white">
          {orders.length > 0 ? (
            <table className="min-w-full text-left text-gray-500">
              <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                <tr>
                  <th className="py-2 px-4 sm:py-3">Image</th>
                  <th className="py-2 px-4 sm:py-3">Order ID</th>
                  <th className="py-2 px-4 sm:py-3">Created</th>
                  <th className="py-2 px-4 sm:py-3">Shipping Address</th>
                  <th className="py-2 px-4 sm:py-3">Items</th>
                  <th className="py-2 px-4 sm:py-3">Price</th>
                  <th className="py-2 px-4 sm:py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    onClick={() => handleRowClick(order._id)}
                    className="border-b hover:bg-gray-50 cursor-pointer transition duration-150 ease-in-out"
                  >
                    <td className="py-2 px-2 sm:py-4 sm:px-4">
                      <img
                        src={order.orderItems[0].image}
                        alt={order.orderItems[0].name}
                        className="w-12 h-12 object-cover rounded-lg pointer-events-none"
                      />
                    </td>
                    <td className="py-2 px-4 font-semibold">#{order._id}</td>
                    <td className="py-2 px-4">{order.createdAt}</td>
                    <td className="py-2 px-4">
                      {order.shippingAddress.city}, {order.shippingAddress.country}
                    </td>
                    <td className="py-2 px-4">{order.orderItems.length}</td>
                    <td className="py-2 px-4">${order.totalPrice}</td>
                    <td className="py-2 px-4">
                      <span className="text-green-600 bg-green-100 px-2 py-1 rounded">
                        {order.isPaid ? "Paid" : "Pending"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="py-4 px-4 text-center text-gray-500">You have no orders</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
