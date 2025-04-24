// import React from 'react'
// import { Link } from 'react-router-dom';

// const ProductGrid = ({ products }) => {
//   return ( 
//     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
//     {products.map((product,index) =>(
//         <Link key={index} to={`/product/${product._id}`} className="block">
//           <div className='bg-white p-4 rounded-lg'>
//           <div className='w-full h-96 mb-4'>

//             <img src={product.image[0].url} alt={product.image[0].alText || product.name}  
//             className='w-full h-full object-cover rounded-lg'
            
//             />
//           </div>

//           </div>


//         </Link>
          
        
//     ))}
//   </div>
//   );
  
// };

// export default ProductGrid;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductGrid = ({ products }) => {
//   return ( 
//     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
//       {products?.length > 0 ? (
//         products.map((product, index) => (
//           <Link key={index} to={`/product/${product._id}`} className="block">
//             <div className='bg-white p-4 rounded-lg shadow-md'>
//               <div className='w-full h-96 mb-4'>
//                 <img src={product.image?.[0]?.url} alt={product.image?.[0]?.altText || product.name}  
//                 className='w-full h-full object-cover rounded-lg' />
//               </div>
//               <p className="text-lg font-semibold">{product.name}</p>
//             </div>
//           </Link>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default ProductGrid;





import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  console.log("Products:", products);
  return ( 
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {products?.length > 0 ? (
        products.map((product, index) => (
          <Link key={index} to={`/product/${product._id}`} className="block">
            <div className='bg-white p-4 rounded-lg shadow-md border border-red-500'>
              <div className='w-full h-96 mb-4 overflow-hidden bg-gray-100 flex justify-center items-center'>
                {product.images?.[0]?.url ? (
                  <img 
                    src={product.images[0].url} 
                    alt={product.images[0].altText || product.name}  
                    className='w-full h-full object-cover rounded-lg' 
                  />
                ) : (
                  <span className="text-gray-500">No Image Available</span>
                )}
              </div>
              <h3 className='text-base font-semibold text-black mb-2'>{product.name}</h3>
              
              <p className=" text-gray-500 text-sm font-medium mt-2 tracking-tighter">
              $  {product.price}

              </p>
            </div>

          </Link>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductGrid;
