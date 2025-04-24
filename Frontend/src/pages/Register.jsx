// import React from 'react'

// const Register = () => {
//   return  <div>Register </div>
  
// };

// export default Register;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Register from "../assets/image/register.webp"; // ✅ Correct image import

// const Register = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="flex h-screen">
//       {/* Left Side: Form */}
//       <div className="w-1/2 flex flex-col justify-center items-center p-8">
//         <form className="w-full max-w-md bg-white p-8 rounded-lg border shadow-md">
//           <div className="text-center mb-6">
//             <h2 className="text-xl font-bold">Rabbit</h2>
//           </div>

//           <h2 className="text-2xl font-bold text-center mb-6">Hey there!👋</h2>
//           <p className="text-center text-gray-600 mb-6">
//             Enter your email and password to login
//           </p>

//           <div className="mb-4">
//             <label className="block text-sm font-semibold mb-2">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border rounded"
//               placeholder="Enter your Name"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-semibold mb-2">Email</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded"
//               placeholder="Enter your Email Address"
//             />
//           </div>


//           <div className="mb-4">
//             <label className="block text-sm font-semibold mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded"
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
//           >
//             Sign Up
//           </button>

//           <p className="mt-6 text-center text-sm">
//             Don't have an account?{" "}
//             <Link to="/login" className="text-blue-500 font-medium">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>

//       {/* Right Side: Image */}
//       <div className="w-1/2 h-screen">
//         <img src={Register} alt="Login to account" className="h-full w-full object-cover" />
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterImage from "../assets/image/register.webp"; // ✅ Renamed import

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault ();
    console.log("User Registered:",{name,email,password});
  };

  return (
    <div className="flex h-screen">
      {/* Left Side: Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md bg-white p-8 rounded-lg border shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold">Rabbit</h2>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">Hey there!👋</h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your email and password to login
          </p>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email} // ✅ Fixed: It was setting password instead of email
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your Email Address"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign Up
          </button>

          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/login" className="text-blue-500 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Right Side: Image */}
      <div className="w-1/2 h-screen">
        <img src={RegisterImage} alt="Login to account" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Register;

