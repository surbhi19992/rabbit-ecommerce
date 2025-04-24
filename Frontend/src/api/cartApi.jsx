// import axios from "axios";

// export const addToCartAPI = async (productId, quantity, size, color, guestId = null) => {
//   try {
//     const payload = {
//       productId,
//       quantity,
//       size,
//       color,
//       guestId,
//     };

//     await addToCartAPI({
//       productId,
//       quantity,
//       selectedSize,
//       selectedColor,
//       userId: userId || null,  // Agar userId hai toh bhejo, nahi toh null bhejo
//       guestId: userId ? null : guestId,  // Agar userId hai toh guestId null ho jayega
//     });
    

//     const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/cart`, payload);
//     return response.data;
//   } catch (error) {
//     console.error("Error in addToCartAPI:", error.response?.data || error.message);
//     throw error;
//   }
// };








// // import axios from "axios";

// // export const addToCartAPI = async (productId, quantity, size, color, guestId = null) => {
// //   try {
// //     const payload = {
// //       productId,
// //       quantity,
// //       size,
// //       color,
// //       guestId,
// //     };

// //     const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/cart`, payload);
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error in addToCartAPI:", error.response?.data || error.message);
// //     throw error;
// //   }
// // };



// import axios from "axios";

//  const addToCartAPI = async (productId, quantity, size, color, guestId = null) => {
//   try {
//     const payload = {
//       productId,
//       quantity,
//       size,
//       color,
//       guestId,
//     };

//     const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/cart`, payload);
//     return response.data;
//   } catch (error) {
//     console.error("Error in addToCartAPI:", error.response ? error.response.data : error.message);
//     throw error;
//   }
// };
// export default addToCartAPI;





import axios from "axios";

const addToCartAPI = async (payload) => {
  try {
    const res = await axios.post("http://localhost:5001/api/cart", payload);
    return res.data;
  } catch (error) {
    console.error("Error in addToCartAPI:", error.response?.data || error.message);
    throw error;
  }
};

export default addToCartAPI;
