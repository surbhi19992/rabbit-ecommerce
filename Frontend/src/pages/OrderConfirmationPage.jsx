// import React from 'react'
// // import OrderConfirmationPage from './OrderConfirmationPage';


// const checkout = {
//     _id: "12345" ,
//     createdAt: new Date(),
//     checkoutItems: [
//         {
//             productId: "1",
//             name: "jacket",
//             color: "black",
//             size: "M",
//             price: 150,
//             quantity: 1,
//             image: "https://picsum.photos/150?random=1",
//         },
//         {
//             productId: "2",
//             name: "T-shirt",
//             color: "black",
//             size: "M",
//             price: 120,
//             quantity: 2,
//             image: "https://picsum.photos/150?random=1",
//         },
//     ],
//     shippingAddress:{
//       address: "123 Fashion street",
//       city: "New York",
//       country: "USA",
//     },
// };
// const OrderConfirmationPage = () => {
//   return <div className='max-w-4xl mx-auto p-6 bg-white'>

//     <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
//         Thank You for Your Order!
//     </h1>

//     {checkout && (
//         <div className='p-6 rounded-lg border'>

//             <div className='flex justify-center mb-20'>
//                 {/* {order id and date} */}
//                 <div>
//                     <h2 className='text-xl font-semibold'>
//                     order ID: {checkout._id}

//                     </h2>
//                     <p className='text-gray-500'>
//                         order date: {new Date(checkout.createdAt).toLocaleDateString()}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )}
//   </div>;
  
// }

// export default OrderConfirmationPage;





import React from 'react';

const checkout = {
  _id: '12345',
  createdAt: new Date('2024-12-14'),
  checkoutItems: [
    {
      productId: '1',
      name: 'Jacket',
      color: 'black',
      size: 'M',
      price: 150,
      quantity: 1,
      image: 'https://picsum.photos/150?random=1',
    },
    {
      productId: '2',
      name: 'T-shirt',
      color: 'black',
      size: 'M',
      price: 120,
      quantity: 2,
      image: 'https://picsum.photos/150?random=2',
    },
  ],
  paymentMethod: 'PayPal',
  shippingAddress: {
    address: '123 Fashion Street',
    city: 'New York',
    country: 'USA',
  },
};

const OrderConfirmationPage = () => {
  // Just for mock: estimated delivery is 10 days after order
  const estimatedDelivery = new Date(checkout.createdAt);
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 10);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for Your Order!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border">
          {/* Top Info */}
          <div className="flex justify-between items-start mb-10 text-sm text-gray-700">
            <div>
              <h2 className="text-lg font-semibold">Order ID: {checkout._id}</h2>
              <p className="text-gray-500">
                Order date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 font-medium">Estimated Delivery:</p>
              <p className="font-semibold">
                {estimatedDelivery.toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Items */}
          <div className="border rounded-lg divide-y mb-6">
            {checkout.checkoutItems.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded object-cover"
                  />
                  <div className="text-sm">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500">
                      {item.color} | {item.size}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-right">
                  <p className="font-medium">${item.price}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment and Delivery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-1">Payment</p>
              <p>{checkout.paymentMethod}</p>
            </div>
            <div>
              <p className="font-bold mb-1 ">Delivery</p>
              <p>{checkout.shippingAddress.address}</p>
              <p>
                {checkout.shippingAddress.city},{' '}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
