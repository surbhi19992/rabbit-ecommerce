
// import React from 'react';

// const ProductManagement = () => {
//   const products = [
//     {
//       id: 1,
//       name: 'Shirt',
//       price: '$110',
//       sku: '123132313'
//     },
//     // aur products add kar sakta hai
//   ];

//   const handleDelete = (id) =>{
//     if (window.confirm("Are You sure you want to delete the products?")) {
//       console.log("Delete Product with id:", id);
//     }
//   };

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-semibold mb-6">Product Management</h2>
//       <div className="overflow-x-auto shadow rounded-lg">
//         <table className="min-w-full bg-white border border-gray-200 rounded-lg">
//           <thead>
//             <tr className="bg-gray-100 text-left text-sm text-gray-700 uppercase tracking-wider">
//               <th className="py-3 px-6">Name</th>
//               <th className="py-3 px-6">Price</th>
//               <th className="py-3 px-6">SKU</th>
//               <th className="py-3 px-6">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.length > 0 ? (
//               products.map((product) => (
//                 <tr key={product.id} className="border-t border-gray-200 text-[15px]">
//                   <td className="py-4 px-6 font-medium text-gray-800">{product.name}</td>
//                   <td className="py-4 px-6 text-gray-600">{product.price}</td>
//                   <td className="py-4 px-6 text-gray-600">{product.sku}</td>
//                   <td className="py-4 px-6">
//                     <button    
//                     onClick={()=> handleDelete(product.id)}
//                     className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-4 py-1 rounded mr-2">Edit</button>
//                     <button 
//                     onClick={()=> handleDelete(product.id)}
//                     className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded">Delete</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={4} className="p-4 text-center text-gray-500">
//                   No Products found.
//                 </td>
//               </tr>
//             )}    
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProductManagement;      







import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link

const ProductManagement = () => {
  const products = [
    {
      id: 1,
      name: 'Shirt',
      price: '$110',
      sku: '123132313'
    },
    // aur products add kar sakta hai
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the product?")) {
      console.log("Delete Product with id:", id);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Product Management</h2>
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-700 uppercase tracking-wider">
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">SKU</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id} className="border-t border-gray-200 text-[15px]">
                  <td className="py-4 px-6 font-medium text-gray-800">{product.name}</td>
                  <td className="py-4 px-6 text-gray-600">{product.price}</td>
                  <td className="py-4 px-6 text-gray-600">{product.sku}</td>
                  <td className="py-4 px-6">
                    <Link
                      to={`/admin/products/${product.id}/edit`}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-4 py-1 rounded mr-2"
                    >
                      Edit
                    </Link>
                    <button 
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No Products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
