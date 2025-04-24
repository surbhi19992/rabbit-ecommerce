
// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';

// // const OrderDetailsPage = () => {
// //   const { id } = useParams();
// //   const [orderDetails, setOrderDetails] = useState(null);

// //   useEffect(() => {
// //     const mockOrderDetails = {
// //       createdAt: new Date(),
// //       isDelivered: true,
// //       paymentMethod: 'PayPal',
// //       shippingMethod: 'Standard',
// //       shippingAddress: { city: 'New York', country: 'USA' },
// //       orderItems: [
// //         {
// //           orderId: '12345',
// //           productId: '1',
// //           name: 'Jacket',
// //           price: 100,
// //           quantity: 1,
// //           image: 'https://picsum.photos/150?random=1',
// //         },
// //         {
// //           orderId: '34567',
// //           productId: '2',
// //           name: 'Shirt',
// //           price: 100,
// //           quantity: 1,
// //           image: 'https://picsum.photos/150?random=2',
// //         },
// //       ],
// //     };

// //     setOrderDetails(mockOrderDetails);
// //   }, [id]);

// //   return (
// //     <div className="max-w-7xl mx-auto p-4 sm:p-6">
// //       <h2 className="text-2xl md:text-3xl font-bold mb-6">My Orders</h2>

// //       {!orderDetails ? (
// //         <p>No order details found</p>
// //       ) : (
// //         <div className="overflow-x-auto bg-white rounded-lg shadow">
// //           <table className="min-w-full text-sm text-left text-gray-700">
// //             <thead className="bg-gray-100 text-xs uppercase">
// //               <tr>
// //                 <th className="px-4 py-3">Image</th>
// //                 <th className="px-4 py-3">Order ID</th>
// //                 <th className="px-4 py-3">Created</th>
// //                 <th className="px-4 py-3">Shipping Address</th>
// //                 <th className="px-4 py-3">Items</th>
// //                 <th className="px-4 py-3">Price</th>
// //                 <th className="px-4 py-3">Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {orderDetails.orderItems.map((item, index) => (
// //                 <tr className="border-t" key={index}>
// //                   <td className="px-4 py-3">
// //                     <img
// //                       src={item.image}
// //                       alt={item.name}
// //                       className="w-12 h-12 object-cover rounded"
// //                     />
// //                   </td>
// //                   <td className="px-4 py-3 font-medium">#{item.orderId}</td>
// //                   <td className="px-4 py-3">
// //                     {new Date(orderDetails.createdAt).toLocaleDateString('en-GB')}{' '}
// //                     {new Date(orderDetails.createdAt).toLocaleTimeString('en-GB')}
// //                   </td>
// //                   <td className="px-4 py-3">
// //                     {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.country}
// //                   </td>
// //                   <td className="px-4 py-3">{item.quantity}</td>
// //                   <td className="px-4 py-3">${item.price}</td>
// //                   <td className="px-4 py-3">
// //                     <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
// //                       {orderDetails.isDelivered ? 'Paid' : 'Unpaid'}
// //                     </span>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default OrderDetailsPage;








// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const OrderDetailsPage = () => {
//   const { id } = useParams();
//   const [orderDetails, setOrderDetails] = useState(null);

//   useEffect(() => {
//     const mockOrderDetails = {
//       _id: id,
//       createdAt: new Date(),
//       isDelivered: true,
//       paymentMethod: 'PayPal',
//       shippingMethod: 'Standard',
//       shippingAddress: { city: 'New York', country: 'USA' },
//       orderItems: [
//         {
//           productId: '1',
//           name: 'Jacket',
//           price: 120,
//           quantity: 1,
//           image: 'https://picsum.photos/150?random=1',
//         },
//         {
//           productId: '2',
//           name: 'Shirt',
//           price: 150,
//           quantity: 2,
//           image: 'https://picsum.photos/150?random=2',
//         },
//       ],
//     };

//     setOrderDetails(mockOrderDetails);
//   }, [id]);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
//       <h2 className="text-2xl font-bold mb-6">Order Details</h2>

//       {!orderDetails ? (
//         <p>No order details found</p>
//       ) : (
//         <>
//           {/* Header Info */}
//           <div className="flex flex-col md:flex-row justify-between mb-6">
//             <div>
//               <p className="text-sm text-gray-600">
//                 <strong>Order ID:</strong> #{orderDetails._id}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Date:</strong>{' '}
//                 {new Date(orderDetails.createdAt).toLocaleDateString('en-GB')}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Payment Method:</strong> {orderDetails.paymentMethod}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Status:</strong>{' '}
//                 {orderDetails.isDelivered ? (
//                   <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Approved</span>
//                 ) : (
//                   <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">Pending</span>
//                 )}
//               </p>
//             </div>

//             <div className="mt-4 md:mt-0">
//               <p className="text-sm text-gray-600">
//                 <strong>Shipping Method:</strong> {orderDetails.shippingMethod}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Address:</strong>{' '}
//                 {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.country}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Status:</strong>{' '}
//                 <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Pending</span>
//               </p>
//             </div>
//           </div>

//           {/* Products Table */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm text-left text-gray-700 border-t border-gray-200">
//               <thead className="bg-gray-100 text-xs uppercase">
//                 <tr>
//                   <th className="px-4 py-3">Image</th>
//                   <th className="px-4 py-3">Name</th>
//                   <th className="px-4 py-3">Unit Price</th>
//                   <th className="px-4 py-3">Quantity</th>
//                   <th className="px-4 py-3">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orderDetails.orderItems.map((item, index) => (
//                   <tr className="border-b" key={index}>
//                     <td className="px-4 py-3">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-12 h-12 object-cover rounded"
//                       />
//                     </td>
//                     <td className="px-4 py-3 font-medium">{item.name}</td>
//                     <td className="px-4 py-3">${item.price}</td>
//                     <td className="px-4 py-3">{item.quantity}</td>
//                     <td className="px-4 py-3">${item.price * item.quantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default OrderDetailsPage;







import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isDelivered: true,
      paymentMethod: 'PayPal',
      shippingMethod: 'Standard',
      shippingAddress: { city: 'New York', country: 'USA' },
      orderItems: [
        {
          productId: '1',
          name: 'Jacket',
          price: 120,
          quantity: 1,
          image: 'https://picsum.photos/150?random=1',
        },
        {
          productId: '2',
          name: 'Shirt',
          price: 150,
          quantity: 2,
          image: 'https://picsum.photos/150?random=2',
        },
      ],
    };

    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Order Details</h2>

      {!orderDetails ? (
        <p>No order details found</p>
      ) : (
        <>
          {/* Header Info */}
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <p className="text-sm text-gray-600">
                <strong>Order ID:</strong> #{orderDetails._id}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date:</strong>{' '}
                {new Date(orderDetails.createdAt).toLocaleDateString('en-GB')}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Payment Method:</strong> {orderDetails.paymentMethod}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Status:</strong>{' '}
                {orderDetails.isDelivered ? (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Approved</span>
                ) : (
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">Pending</span>
                )}
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-600">
                <strong>Shipping Method:</strong> {orderDetails.shippingMethod}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Address:</strong>{' '}
                {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.country}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Status:</strong>{' '}
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Pending</span>
              </p>
            </div>
          </div>

          {/* Products Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700 border-t border-gray-200">
              <thead className="bg-gray-100 text-xs uppercase">
                <tr>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Unit Price</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item, index) => (
                  <tr className="border-b" key={index}>
                    <td className="px-4 py-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-3 font-medium text-blue-600 hover:underline cursor-pointer">
                      {item.name}
                    </td>
                    <td className="px-4 py-3">${item.price}</td>
                    <td className="px-4 py-3">{item.quantity}</td>
                    <td className="px-4 py-3">${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Back to Orders Link */}
          <div className="mt-4">
            <Link to="/my-orders" className="text-sm text-blue-600 hover:underline">
              &larr; Back to My Orders
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderDetailsPage;
