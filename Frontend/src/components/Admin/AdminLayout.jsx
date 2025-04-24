







// // import React, { useState } from 'react';
// // import { FaBars } from 'react-icons/fa';
// // import AdminSidebar from './AdminSidebar';

// // const AdminLayout = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col md:flex-row relative">
// //       {/* Mobile top bar */}
// //       <div className="flex md:hidden p-4 bg-gray-900 text-white z-20 items-center">
// //         <button onClick={toggleSidebar}>
// //           <FaBars size={24} />
// //         </button>
// //         <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
// //       </div>

// //       {/* Mobile overlay */}
// //       {isSidebarOpen && (
// //         <div
// //           className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
// //           onClick={toggleSidebar}
// //         ></div>
// //       )}

// //       {/* Sidebar */}
// //       <div className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform $
// //         {isSidebarOpen ? "translate-x-0" : "-translate-x-full"
// //         } transition-transform duration-300 md:translate-x-0 md:static md:blocl z-20`}
// //         >
// //         {/* <p>Sidebar Content</p> */}
// //         {/* Add sidebar links/components here */}

// //         {/* {sidebar} */}

// //         <AdminSidebar />
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminLayout;






// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
// import AdminSidebar from './AdminSidebar';

// const AdminLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row relative">
//       {/* Mobile top bar */}
//       <div className="flex md:hidden p-4 bg-gray-900 text-white z-20 items-center">
//         <button onClick={toggleSidebar}>
//           <FaBars size={24} />
//         </button>
//         <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
//       </div>

//       {/* Mobile overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transition-transform duration-300 z-20 transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 md:static`}
//       >
//         {/* Sidebar Content */}
//         <AdminSidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4">
//         {/* Content goes here */}
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;





// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
// import { Link } from 'react-router-dom'; // For navigation
// import AdminSidebar from './AdminSidebar'; // Assuming you have this component

// const AdminLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row relative">
//       {/* Mobile top bar */}
//       <div className="flex md:hidden p-4 bg-gray-900 text-white z-20 items-center">
//         <button onClick={toggleSidebar}>
//           <FaBars size={24} />
//         </button>
//         <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
//       </div>

//       {/* Mobile overlay when sidebar is open */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transition-transform duration-300 z-20 transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:translate-x-0 md:static`}
//       >
//         <AdminSidebar />
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-4">
//         {/* Link to other pages (if you have routes for other pages) */}
//         <Link to="/another-page">Go to Another Page</Link>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;    







// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
// import AdminSidebar from './AdminSidebar';
// import { Outlet } from 'react-router-dom';

// const AdminLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row relative">
//       {/* Mobile Top Bar */}
//       <div className="flex md:hidden p-4 bg-gray-900 text-white z-20 items-center">
//         <button onClick={toggleSidebar}>
//           <FaBars size={24} />
//         </button>
//         <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
//       </div>

//       {/* Mobile Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transition-transform duration-300 z-20 transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:translate-x-0 md:static`}
//       >
//         <AdminSidebar toggleSidebar={toggleSidebar} />
//       </div>

//       {/* Main Content */}
//       {/* <div className="flex-1 p-4"> */}
//         {/* This is where routed content will render */}
//         {/* <h2 className="text-2xl font-semibold">Welcome to Admin Panel</h2> */}
//       {/* </div> */}

//       <div className='flex-grow p-6 overflow-auto'>

//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;






import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Top Bar */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-30 items-center">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white z-30 transform transition-transform duration-300 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:relative md:block fixed`}
      >
        <AdminSidebar toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-auto z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
