import React from 'react'
import MyOrdersPage from './MyOrdersPage';

const Profile = () => {
  return (
  <div className='min-h-screen flex flex-col'>
    <div className='flex-row container mx-auto p-4 md:p-6'>
      <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
     {/* {left section} */}
     <div className='w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6'>
     <h1 className='text-2xl md:text-3xl font-bold mb-4'> johan Deo</h1>
     <p className='text-lg text-gray-600 mb-4'>johan@example.com</p>
     <button className='w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'>
      Logout
     </button>
     </div>
     {/* {right section: orders table} */}
     <div className='w-full md:w-2/3 lg:w-3/4'>
     <MyOrdersPage />
     
     </div>
      </div>
    </div>
     </div>
  ); 
}

export default Profile;




// import React, { useState } from "react";

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     bio: "Web Developer | Tech Enthusiast | Coffee Lover",
//     location: "New York, USA",
//     profilePic: "https://via.placeholder.com/150",
//   });

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Profile Header */}
//       <div className="container mx-auto p-4 md:p-6 flex flex-col items-center">
//         <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
//           <div className="flex flex-col items-center">
//             {/* Profile Picture */}
//             <img
//               src={user.profilePic}
//               alt="Profile"
//               className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4"
//             />

//             {/* User Details */}
//             <h2 className="text-xl font-semibold">{user.name}</h2>
//             <p className="text-gray-600">{user.email}</p>
//             <p className="text-gray-500 text-sm mt-2">{user.bio}</p>
//             <p className="text-gray-500 text-sm">{user.location}</p>

//             {/* Edit Profile Button */}
//             <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition">
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
