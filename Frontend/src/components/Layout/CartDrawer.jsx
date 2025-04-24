// import React from 'react'
// import { useState } from 'react'

// const CartDrawer = () => {
//     const [drawerOpen,setDrawerOpen]=useState(true);

//     const togglecartDrawer = () => {
//         setDrawerOpen(!drawerOpen);
//     }
//   return <div className='{`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform-transition-transform duration-30 flex flex-col z-50 ${draweropen ? "translate-x-0":"translate-x-full"}`}'>

//      {/* {close button}  */}
//      <div className='flex justify-end p-4'>
//         <button onClick={togglecartDrawer}>
//             <IoMidClose className="h-6 w-6 text-gray-600" />
//         </button>
//      </div>
//     </div>;
  
// }

// export default CartDrawer





// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io"; // ✅ Fixed Import
// import CartContents from "../Cart/CartContents";
// import { useNavigate } from "react-router-dom";

// const CartDrawer = ({ drawerOpen , toggleCartDrawer}) => {
//  const navigate = useNavigate();
//   const handleCheckout = () => {

//     navigate("/checkout");
//   }

//   }
//   return (
//     <div
//       className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[35rem] h-full bg-white shadow-lg tranform transition-transform duration-300 flex flex-col z-50 ${
//         drawerOpen ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       {/* Close Button */}
//       <div className="flex justify-end p-4">
//         <button onClick={toggleCartDrawer}>
//           <IoMdClose className="h-6 w-6 text-gray-600" />
//         </button>
//       </div>  
//       {/* Drawer Content */}
//       <div className=" flex-grow p-4 overflow-y-auto">
//         <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
//         {/* {component for cart contents} */}
//         <CartContents />    

//       </div>   

//       {/* {checkout button fixed at the bottom} */}
//       <div className="p-4 bg-white sticky botton-0">
//         <button 
//         onClick={handleCheckout} 
//         className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
//             Checkout  
//         </button>  
//         <p className="text-sm trcking-tighter text-gray-500 mt-2 text-center">
//             Shipping, taxes , and discount codes calculated at checkout
//         </p>
//       </div>
      
//     </div>
//   );
// };

// export default CartDrawer;





import { IoMdClose } from "react-icons/io"; // ✅ Fixed Import
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[35rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Drawer Content */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* {component for cart contents} */}
        <CartContents />
      </div>

      {/* {checkout button fixed at the bottom} */}
      <div className="p-4 bg-white sticky bottom-0">
        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discount codes calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
