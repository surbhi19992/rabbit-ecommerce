
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import login from "../assets/image/login.webp"; // ✅ Correct image import

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


//   const handleSubmit = (e) => {
//     e.preventDefault ();
//     console.log("User login:",{ email, password});
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Side: Form */}
//       <div className="w-1/2 flex flex-col justify-center items-center p-8">
//         <form 
//         onSubmit={handleSubmit} 
//         className="w-full max-w-md bg-white p-8 rounded-lg border shadow-md">
//           <div className="text-center mb-6">
//             <h2 className="text-xl font-bold">Rabbit</h2>
//           </div>

//           <h2 className="text-2xl font-bold text-center mb-6">Hey there!👋</h2>
//           <p className="text-center text-gray-600 mb-6">
//             Enter your email and password to login
//           </p>

//           <div className="mb-4">
//             <label className="block text-sm font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded"
//               placeholder="Enter your email address"
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
//             Sign In
//           </button>

//           <p className="mt-6 text-center text-sm">
//             Don't have an account?{" "}
//             <Link to="/register" className="text-blue-500 font-medium">
//               Register
//             </Link>
//           </p>
//         </form>
//       </div>

//       {/* Right Side: Image */}
//       <div className="w-1/2 h-screen">
//         <img src={login} alt="Login to account" className="h-full w-full object-cover" />
//       </div>
//     </div>
//   );
// };

// export default Login;







import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/image/login.webp"; // ✅ Correct image import

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();   

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login successful:", data);
      alert("Login successful!");

      // Optionally store user in localStorage and redirect
      // localStorage.setItem("user", JSON.stringify(data));
      // navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side: Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-md"
        >
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold">Rabbit</h2>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">Hey there! 👋</h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your email and password to login
          </p>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email address"
              required
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
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign In
          </button>

          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Right Side: Image */}
      <div className="w-1/2 h-screen">
        <img
          src={login}
          alt="Login to account"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
