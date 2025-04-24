
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { RiDeleteBin3Line } from "react-icons/ri";

// const CartContent = () => {
//   const [cartProducts, setCartProducts] = useState([]);

//   const fetchCart = async () => {
//     const guestId = localStorage.getItem("guestId");
//     try {
//       const res = await axios.get(`http://localhost:5001/api/cart?guestId=${guestId}`);
//       if (res.data.products && res.data.products.length > 0) {
//         setCartProducts(res.data.products);
//       } else {
//         throw new Error("Empty cart from backend");
//       }
//     } catch (err) {
//       console.warn("Using localStorage fallback for cart:", err.message);
//       const localCart = JSON.parse(localStorage.getItem("cart")) || [];
//       setCartProducts(localCart);
//     }
//   };

//   const handleDelete = async (productId) => {
//     const guestId = localStorage.getItem("guestId");
//     try {
//       const res = await axios.delete(`http://localhost:5001/api/cart`, {
//         data: { guestId, productId },
//       });
//       setCartProducts(res.data.products);
//     } catch (err) {
//       console.error("Error deleting product:", err.message);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Your Cart</h2>
//       {cartProducts.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         cartProducts.map((product, index) => (
//           <div key={index} className="border p-4 mb-2 flex justify-between items-center">
//             <div className="flex items-center">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-20 h-24 object-cover mr-4"
//               />
//               <div>
//                 <p className="font-medium">{product.name}</p>
//                 <p>Quantity: {product.quantity}</p>
//                 <p>Color: {product.color}</p>
//                 <p>Size: {product.size}</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-end">
//               <p className="font-medium text-right">${product.price}</p>
//               <button
//                 className="text-red-500 mt-2 hover:text-red-700"
//                 onClick={() => handleDelete(product._id)}
//               >
//                 <RiDeleteBin3Line className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default CartContent;







// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { RiDeleteBin3Line } from "react-icons/ri";
// import { useCart } from "../../context/CartContext"; // ✅ context import किया

// const CartContent = () => {
//   const [cartProducts, setCartProducts] = useState([]);
//   const { updateCartCount } = useCart(); // ✅ context से function लिया

//   const fetchCart = async () => {
//     const guestId = localStorage.getItem("guestId");
//     try {
//       const res = await axios.get(`http://localhost:5001/api/cart?guestId=${guestId}`);
//       if (res.data.products && res.data.products.length > 0) {
//         setCartProducts(res.data.products);
//       } else {
//         throw new Error("Empty cart from backend");
//       }
//     } catch (err) {
//       console.warn("Using localStorage fallback for cart:", err.message);
//       const localCart = JSON.parse(localStorage.getItem("cart")) || [];
//       setCartProducts(localCart);
//     }
//   };

//   const handleDelete = async (product) => {
//     const guestId = localStorage.getItem("guestId");
//     try {
//       const res = await axios.delete("http://localhost:5001/api/cart", {
//         data: {
//           guestId,
//           productId: product.productId || product._id,
//           size: product.size,
//           color: product.color,
//         },
//       });
//       setCartProducts(res.data.products || res.data.items || []); // defensive code
//       updateCartCount();
//     } catch (err) {
//       console.error("Error deleting product:", err.message);
//     }
//   };
  

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Your Cart</h2>
//       {cartProducts.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         cartProducts.map((product, index) => (
//           <div key={index} className="border p-4 mb-2 flex justify-between items-center">
//             <div className="flex items-center">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-20 h-24 object-cover mr-4"
//               />
//               <div>
//                 <p className="font-medium">{product.name}</p>
//                 <p>Quantity: {product.quantity}</p>
//                 <p>Color: {product.color}</p>
//                 <p>Size: {product.size}</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-end">
//               <p className="font-medium text-right">${product.price}</p>
//               <button
//                 className="text-red-500 mt-2 hover:text-red-700"
//                 onClick={() => handleDelete(product)} // ✅ FIXED: now passing full product object
//               >
//                 <RiDeleteBin3Line className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default CartContent;





import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useCart } from "../../context/CartContext"; // ✅ context import किया

const CartContent = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { updateCartCount } = useCart(); // ✅ context से function लिया

  const fetchCart = async () => {
    const guestId = localStorage.getItem("guestId");
    try {
      const res = await axios.get(`http://localhost:5001/api/cart?guestId=${guestId}`);
      if (res.data.products && res.data.products.length > 0) {
        setCartProducts(res.data.products);
      } else {
        throw new Error("Empty cart from backend");
      }
    } catch (err) {
      console.warn("Using localStorage fallback for cart:", err.message);
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartProducts(localCart);
    }
  };

  const handleDelete = async (product) => {
    const guestId = localStorage.getItem("guestId");
    try {
      const res = await axios.delete("http://localhost:5001/api/cart", {
        data: {
          guestId,
          productId: product.productId || product._id,
          size: product.size,
          color: product.color,
        },
      });
      setCartProducts(res.data.products || res.data.items || []); // defensive code
      updateCartCount();
    } catch (err) {
      console.error("Error deleting product:", err.message);
    }
  };

  const handleAddToCart = async (productId, quantity, size, color) => {
    const guestId = localStorage.getItem("guestId");
    try {
      const res = await axios.post("http://localhost:5001/api/cart", {
        guestId,
        productId,
        quantity,
        size,
        color,
      });
      setCartProducts(res.data.products || []); // Update cart products with the response
      updateCartCount();
    } catch (err) {
      console.error("Error adding product to cart:", err.message);
    }
  };

  const handleUpdateCartItem = async (productId, quantity, size, color) => {
    const guestId = localStorage.getItem("guestId");
    try {
      const res = await axios.put("http://localhost:5001/api/cart", {
        guestId,
        productId,
        quantity,
        size,
        color,
      });
      setCartProducts(res.data.products || []); // Update cart with the updated item
      updateCartCount();
    } catch (err) {
      console.error("Error updating cart item:", err.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartProducts.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartProducts.map((product, index) => (
          <div key={index} className="border p-4 mb-2 flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-24 object-cover mr-4"
              />
              <div>
                <p className="font-medium">{product.name}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Color: {product.color}</p>
                <p>Size: {product.size}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-medium text-right">${product.price}</p>
              <button
                className="text-red-500 mt-2 hover:text-red-700"
                onClick={() => handleDelete(product)} // ✅ FIXED: now passing full product object
              >
                <RiDeleteBin3Line className="h-6 w-6" />
              </button>
              <button
                className="text-blue-500 mt-2 hover:text-blue-700"
                onClick={() => handleUpdateCartItem(product.productId, product.quantity + 1, product.size, product.color)} // Update quantity
              >
                Update Quantity
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartContent;
