
// import { Link, NavLink } from 'react-router-dom';
// import { FaUser, FaBox, FaClipboardList, FaStore } from 'react-icons/fa';

// const AdminSidebar = ({ toggleSidebar }) => {
//   return (
//     <div className="p-6 text-white">
//       {/* Logo or Title */}
//       <div className="mb-6">
//         <Link to="/admin" className="text-2xl font-medium">
//           Rabbit
//         </Link>
//       </div>

//       <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>

//       {/* Navigation Links */}
//       <nav className="flex flex-col space-y-2">
//         <NavLink
//           to="/admin/orders"
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
//               : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
//           }
//         >
//           <FaClipboardList />
//           <span>Orders</span>
//         </NavLink>

//         <NavLink
//           to="/admin/products"
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
//               : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
//           }
//         >
//           <FaBox />
//           <span>Products</span>
//         </NavLink>

//         <NavLink
//           to="/admin/shop"
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
//               : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
//           }
//         >
//           <FaStore />
//           <span>Shop</span>
//         </NavLink>

//         <NavLink
//           to="/admin/users"
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
//               : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
//           }
//         >
//           <FaUser />
//           <span>Users</span>
//         </NavLink>
//       </nav>

//       {/* Mobile Close Button */}
//       <div className="md:hidden mt-6">
//         <button
//           onClick={toggleSidebar}
//           className="text-sm underline text-gray-300"
//         >
//           Close Sidebar
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminSidebar;









import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaBox, FaClipboardList, FaStore, FaSignOutAlt } from 'react-icons/fa';

const AdminSidebar = ({ toggleSidebar }) => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logged out");
  };

  return (
    <div className="p-6 text-white">
      {/* Logo or Title */}
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          Rabbit
        </Link>
      </div>

      <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaBox />
          <span>Products</span>
        </NavLink>

        <NavLink
          to="/admin/shop"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaStore />
          <span>Shop</span>
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaUser />
          <span>Users</span>
        </NavLink>
      </nav>

      {/* Logout Button */}
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded flex items-center justify-center space-x-2"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>

      {/* Mobile Close Button */}
      <div className="md:hidden mt-6">
        <button
          onClick={toggleSidebar}
          className="text-sm underline text-gray-300"
        >
          Close Sidebar
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
