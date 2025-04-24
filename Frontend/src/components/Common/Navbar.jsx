
// import { Link } from "react-router-dom";
// import {
//   HiOutlineUser,
//   HiOutlineShoppingBag,
//   HiBars3BottomRight,
// } from "react-icons/hi2";
// import SearchBar from "./SearchBar";
// import CartDrawer from "../Layout/CartDrawer";
// import { useState } from "react";

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [navDrawerOpen, setNavDrawerOpen] = useState(false);

//   const toggleNavDrawer = () => {
//     setNavDrawerOpen((prev) => !prev); // Toggle state properly
//   };

//   const toggleCartDrawer = () => {
//     setDrawerOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <nav className="container mx-auto flex items-center justify-between py-4 px-6">
//         {/* Left Logo */}
//         <div>
//           <Link to="/" className="text-2xl font-medium">
//             Rabbit
//           </Link>
//         </div>

//         {/* Center Navigation Links (Desktop) */}
//         <div className="hidden md:flex space-x-6">
//           {["Men", "Women", "Top Wear", "Bottom Wear"].map((category) => (
//             <Link
//               key={category}
//               to="/collections/all"
//               className="text-gray-700 hover:text-black text-sm font-medium uppercase"
//             >
//               {category}
//             </Link>
//           ))}
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-4">
//           <Link 
//           to="/admin"
//            className="block bg-black px-2 rounded text-sm text-white"
          
//           >
//             Admin</Link>
//           {/* Profile Icon */}
//           {/* <Link to="/profile" className="hover:text-black">
          
//             <HiOutlineUser className="h-6 w-6 text-gray-700" />
//           </Link> */}
//           <Link to="/login" className="hover:text-black">
//          <HiOutlineUser className="h-6 w-6 text-gray-700" />
//          </Link>


//           {/* Cart Button */}
//           <button onClick={toggleCartDrawer} className="relative hover:text-black">
//             <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
//             {/* <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
//               4
//             </span> */}
//           </button>

//           {/* Search Bar */}
//           <div className="hidden md:block">
//             <SearchBar />
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={toggleNavDrawer}>
//             <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
//           </button>
//         </div>
//       </nav>

//       {/* Cart Drawer */}
//       <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

//       {/* Mobile Navigation Drawer */}
//       {navDrawerOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
//           <div className="bg-white w-64 h-full shadow-lg p-4">
//             {/* Close Button */}
//             <button onClick={toggleNavDrawer} className="absolute top-4 right-4 text-gray-700">
//               ✖
//             </button>

//             <nav className="mt-10 space-y-4 text-lg">
//               {["Men", "Women", "Top Wear", "Bottom Wear"].map((category) => (
//                 <Link
//                   key={category}
//                   to="#"
//                   className="block text-gray-700 hover:text-black"
//                   onClick={toggleNavDrawer} // Close on click
//                 >
//                   {category}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;







// import { Link } from "react-router-dom";
// import {
//   HiOutlineUser,
//   HiOutlineShoppingBag,
//   HiBars3BottomRight,
// } from "react-icons/hi2";
// import SearchBar from "./SearchBar";
// import CartDrawer from "../Layout/CartDrawer";
// import { useState } from "react";

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [navDrawerOpen, setNavDrawerOpen] = useState(false);

//   const toggleNavDrawer = () => {
//     setNavDrawerOpen((prev) => !prev); // Toggle state properly
//   };

//   const toggleCartDrawer = () => {
//     setDrawerOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <nav className="container mx-auto flex items-center justify-between py-4 px-6">
//         {/* Left Logo */}
//         <div>
//           <Link to="/" className="text-2xl font-medium">
//             Rabbit
//           </Link>
//         </div>

//         {/* Center Navigation Links (Desktop) */}
//         <div className="hidden md:flex space-x-6">
//           {["Men", "Women", "Top Wear", "Bottom Wear"].map((category) => (
//             <Link
//               key={category}
//               to="/collections/all"
//               className="text-gray-700 hover:text-black text-sm font-medium uppercase"
//             >
//               {category}
//             </Link>
//           ))}
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-4">
//           <Link 
//           to="/admin"
//            className="block bg-black px-2 rounded text-sm text-white"
          
//           >
//             Admin</Link>
//           {/* Profile Icon */}
//           {/* <Link to="/profile" className="hover:text-black">
          
//             <HiOutlineUser className="h-6 w-6 text-gray-700" />
//           </Link> */}
//           <Link to="/login" className="hover:text-black">
//          <HiOutlineUser className="h-6 w-6 text-gray-700" />
//          </Link>


//           {/* Cart Button */}
//           <button onClick={toggleCartDrawer} className="relative hover:text-black">
//             <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
//             {/* <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
//               4
//             </span> */}
//           </button>

//           {/* Search Bar */}
//           <div className="hidden md:block">
//             <SearchBar />
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={toggleNavDrawer}>
//             <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
//           </button>
//         </div>
//       </nav>

//       {/* Cart Drawer */}
//       <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

//       {/* Mobile Navigation Drawer */}
//       {navDrawerOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
//           <div className="bg-white w-64 h-full shadow-lg p-4">
//             {/* Close Button */}
//             <button onClick={toggleNavDrawer} className="absolute top-4 right-4 text-gray-700">
//               ✖
//             </button>

//             <nav className="mt-10 space-y-4 text-lg">
//               {["Men", "Women", "Top Wear", "Bottom Wear"].map((category) => (
//                 <Link
//                   key={category}
//                   to="#"
//                   className="block text-gray-700 hover:text-black"
//                   onClick={toggleNavDrawer} // Close on click
//                 >
//                   {category}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;







import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleNavDrawer = () => {
    setNavDrawerOpen((prev) => !prev);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const getCartCount = () => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = localCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  };

  useEffect(() => {
    getCartCount();
    const updateCart = () => getCartCount();
    window.addEventListener("cartUpdated", updateCart);
    return () => window.removeEventListener("cartUpdated", updateCart);
  }, []);

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          {["Men", "Women", "Top Wear", "Bottom Wear"].map((category) => (
            <Link
              key={category}
              to="/collections/all"
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/admin" className="block bg-black px-2 rounded text-sm text-white">
            Admin
          </Link>

          <Link to="/login" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          <button onClick={toggleCartDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </button>

          <div className="hidden md:block">
            <SearchBar />
          </div>

          <button className="md:hidden" onClick={toggleNavDrawer}>
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {navDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-64 h-full shadow-lg p-4">
            <button onClick={toggleNavDrawer} className="absolute top-4 right-4 text-gray-700">
              ✖
            </button>
            <nav className="mt-10 space-y-4 text-lg">
              {["Men", "Women", "Top Wear", "Bottom Wear"].map((category) => (
                <Link
                  key={category}
                  to="#"
                  className="block text-gray-700 hover:text-black"
                  onClick={toggleNavDrawer}
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
