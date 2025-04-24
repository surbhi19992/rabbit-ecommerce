
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const cart = {
//   products: [
//     {
//       name: "Stylish Jacket",
//       size: "M",
//       color: "Black",
//       price: 120,
//       image: "https://picsum.photos/150?random=1",
//     },
//     {
//       name: "Casual Sneakers",
//       size: "M",
//       color: "White",
//       price: 75,
//       image: "https://picsum.photos/150?random=2",
//     },
//   ],
//   totalPrice: 195,
// };

// const Checkout = () => {
//   const navigate = useNavigate();
//   const [checkoutId, setCheckoutId] = useState(null);
//   const [showPayPal, setShowPayPal] = useState(false);

//   const [shippingAddress, setShippingAddress] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     country: "",
//     phone: "",
//   });

//   // Function to handle checkout form submission
//   const handleCreateCheckout = (e) => {
//     e.preventDefault();
//     setCheckoutId(123);
//     setShowPayPal(true); // Show PayPal button after filling the form
//     setCheckoutId(123);
//   };

//   return (
//     <PayPalScriptProvider options={{ "client-id": "AWs03_hs_7fMKez2VliVjv7koNkwlYd-7jNYbuOM-QZx9LUMmgk1lzmy4EbgD1Pzk9CkxEi5BJtKgfFp"  }}>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
//         {/* Left Section */}
//         <div className="bg-white rounded-lg p-6 shadow-lg">
//           <h2 className="text-2xl uppercase mb-6">Checkout</h2>
//           <form onSubmit={handleCreateCheckout}>
//             <h3 className="text-lg mb-4 font-semibold">Contact Details</h3>
//             <div className="mb-4">
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 value="user@example.com"
//                 className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
//                 disabled
//               />
//             </div>

//             <h3 className="text-lg mb-4 font-semibold">Delivery</h3>
//             <div className="mb-4 grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   value={shippingAddress.firstName}
//                   onChange={(e) =>
//                     setShippingAddress({ ...shippingAddress, firstName: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   value={shippingAddress.lastName}
//                   onChange={(e) =>
//                     setShippingAddress({ ...shippingAddress, lastName: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Address</label>
//               <input
//                 type="text"
//                 value={shippingAddress.address}
//                 onChange={(e) =>
//                   setShippingAddress({ ...shippingAddress, address: e.target.value })
//                 }
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>

//             <div className="mb-4 grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700">City</label>
//                 <input
//                   type="text"
//                   value={shippingAddress.city}
//                   onChange={(e) =>
//                     setShippingAddress({ ...shippingAddress, city: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Postal Code</label>
//                 <input
//                   type="text"
//                   value={shippingAddress.postalCode}
//                   onChange={(e) =>
//                     setShippingAddress({ ...shippingAddress, postalCode: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="mb-4 grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700">Country</label>
//                 <input
//                   type="text"
//                   value={shippingAddress.country}
//                   onChange={(e) =>
//                     setShippingAddress({ ...shippingAddress, country: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Phone</label>
//                 <input
//                   type="text"
//                   value={shippingAddress.phone}
//                   onChange={(e) =>
//                     setShippingAddress({ ...shippingAddress, phone: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
//             >
//               Continue to Payment
//             </button>
//           </form>

//           {showPayPal && (
//             <div className="mt-6">
//               <h3 className="text-lg mb-4 font-semibold">Pay with PayPal</h3>
//               <PayPalButtons 
//                 style={{ layout: "vertical" }}
//                 createOrder={(data, actions) => {
//                   return actions.order.create({
//                     purchase_units: [
//                       {
//                         amount: {
//                           value: cart.totalPrice.toString(), // Total amount to be paid
//                         },
//                       },
//                     ],
//                   });
//                 }}
//                 onApprove={(data, actions) => {
//                   return actions.order.capture().then((details) => {
//                     alert(`Transaction completed by ${details.payer.name.given_name}`);
//                     navigate("/thank-you"); // Redirect after payment success
//                   });
//                 }}
//               />
//             </div>
//           )}
//         </div>


//        {/* Right Section (Cart Summary) */}
// <div className="bg-gray-50 p-6 rounded-lg">
//   <h3 className="text-lg mb-4 font-semibold">Order Summary</h3>
//   <div className="border-t py-4 mb-4">
//     {cart.products.map((product, index) => (
//       <div key={index} className="flex items-start gap-4 border-b py-4">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-20 h-24 object-cover rounded"
//         />
//         <div className="flex-1">
//           <h4 className="text-md font-medium">{product.name}</h4>
//           <p className="text-gray-600 text-sm">Size: {product.size}</p>
//           <p className="text-gray-600 text-sm">Color: {product.color}</p>
//         </div>
//         <p className="text-md font-semibold">${product.price?.toLocaleString()}</p>
//       </div>
//     ))}
//   </div>

//   <div className="flex justify-between items-center text-lg mb-2">
//     <p>Subtotal</p>
//     <p>${cart.totalPrice?.toLocaleString()}</p>
//   </div>
//   <div className="flex justify-between items-center text-lg mb-2">
//     <p>Shipping</p>
//     <p>Free</p>
//   </div>
//   <div className="flex justify-between items-center text-lg font-semibold border-t pt-4">
//     <p>Total</p>
//     <p>${cart.totalPrice?.toLocaleString()}</p>
//   </div>
// </div>

       
//         </div>
//         </PayPalScriptProvider>
//       );
//     };
    
//     export default Checkout;
    






import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios"; // make sure this is imported

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "M",
      color: "White",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 195,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [showPayPal, setShowPayPal] = useState(false);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
    setShowPayPal(true);
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "AWs03_hs_7fMKez2VliVjv7koNkwlYd-7jNYbuOM-QZx9LUMmgk1lzmy4EbgD1Pzk9CkxEi5BJtKgfFp" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
        {/* Left Section */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl uppercase mb-6">Checkout</h2>
          <form onSubmit={handleCreateCheckout}>
            <h3 className="text-lg mb-4 font-semibold">Contact Details</h3>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value="user@example.com"
                className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                disabled
              />
            </div>

            <h3 className="text-lg mb-4 font-semibold">Delivery</h3>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  value={shippingAddress.firstName}
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, firstName: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={shippingAddress.lastName}
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, lastName: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                value={shippingAddress.address}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, address: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  value={shippingAddress.city}
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, city: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Postal Code</label>
                <input
                  type="text"
                  value={shippingAddress.postalCode}
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, postalCode: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Country</label>
                <input
                  type="text"
                  value={shippingAddress.country}
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, country: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  value={shippingAddress.phone}
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, phone: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Continue to Payment
            </button>
          </form>

          {showPayPal && (
            <div className="mt-6">
              <h3 className="text-lg mb-4 font-semibold">Pay with PayPal</h3>
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: cart.totalPrice.toString(),
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then(async (details) => {
                    alert(`Transaction completed by ${details.payer.name.given_name}`);

                    try {
                      const token = localStorage.getItem("token");

                      await axios.post("/api/orders", {
                        orderItems: cart.products,
                        totalAmount: cart.totalPrice,
                        shippingAddress: shippingAddress,
                        paymentStatus: "Paid",
                      }, {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      });

                      navigate("/thank-you");
                    } catch (err) {
                      console.error("Order saving failed:", err.response?.data || err);
                      alert("Order was paid but not saved. Please contact support.");
                    }
                  });
                }}
              />
            </div>
          )}
        </div>

        {/* Right Section (Cart Summary) */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg mb-4 font-semibold">Order Summary</h3>
          <div className="border-t py-4 mb-4">
            {cart.products.map((product, index) => (
              <div key={index} className="flex items-start gap-4 border-b py-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="text-md font-medium">{product.name}</h4>
                  <p className="text-gray-600 text-sm">Size: {product.size}</p>
                  <p className="text-gray-600 text-sm">Color: {product.color}</p>
                </div>
                <p className="text-md font-semibold">${product.price?.toLocaleString()}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-lg mb-2">
            <p>Subtotal</p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
          </div>
          <div className="flex justify-between items-center text-lg mb-2">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between items-center text-lg font-semibold border-t pt-4">
            <p>Total</p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default Checkout;
