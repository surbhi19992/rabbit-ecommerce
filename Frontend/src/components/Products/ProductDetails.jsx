
// import React, { useEffect, useState } from "react";
// import { toast } from "sonner";
// import ProductGrid from "./ProductGrid";
// import { addToCartAPI } from "../api/cartAPI";

// const selectedProduct = {
//     name: "Stylish Jacket",
//     price: 120,
//     originalPrice: 150,
//     description: "This is a stylish jacket perfect for any occasion.",
//     brand: "FashionBrand",
//     material: "Leather",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Red", "Black"],
//     images: [
//         {
//             url: "https://picsum.photos/500/500?random=1",
//             altText: "Stylish Jacket 1",
//         },
//         {
//             url: "https://picsum.photos/500/500?random=2",
//             altText: "Stylish Jacket 2",
//         },
//     ],
// };

// const similarProducts = [
//     {
//         _id: 1,
//         name: "Product 1",
//         price: 100,
//         images: [{url: "https://picsum.photos/500/500?random=3"}],
//     },
//     {
//         _id: 1,
//         name: "Product 2",
//         price: 100,
//         images: [{url: "https://picsum.photos/500/500?random=4"}],
//     },
//     {
//         _id: 1,
//         name: "Product 3",
//         price: 100,
//         images: [{url: "https://picsum.photos/500/500?random=5"}],
//     },
//     {
//         _id: 1,
//         name: "Product 4",
//         price: 100,
//         images: [{url: "https://picsum.photos/500/500?random=6"}],
//     },
// ];

// const ProductDetails = () => {
//     const [mainImage, setMainImage] = useState(selectedProduct.images[0].url);
//     const [selectedSize, setSelectedSize] = useState(null);
//     const [selectedColor, setSelectedColor] = useState(null);
//     const [quantity, setQuantity] = useState(1);
//     const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    
//     useEffect(() => {
//         if (selectedProduct?.images?.length > 0) {
//             setMainImage(selectedProduct.images[0].url);
//         }
//     }, []);

//     // Function to add the item to cart
//      // Make sure you create this file

// const handleAddToCart = async () => {
//   if (!selectedSize || !selectedColor) {
//     toast.error("Please select a size and color before adding to cart.");
//     return;
//   }

//   setIsButtonDisabled(true);

//   try {
//     // ⚠️ Update this to dynamic ID when integrating with real product data
//     const productId = "65f93cc7c5d17f96a676cce2";

//     const response = await addToCartAPI(productId, quantity, selectedSize, selectedColor);

// //     toast.success("Item added to cart successfully!");
// //   } catch (error) {
// //     console.error("Error adding to cart:", error);
// //     toast.error(error?.response?.data?.message || "Something went wrong!");
// //   } finally {
// //     setIsButtonDisabled(false); 
// //   }
// // };


//         // setIsButtonDisabled(true); // Disable button while adding

//         // Create cart item
//         const cartItem = {
//             name: selectedProduct.name,
//             price: selectedProduct.price,
//             size: selectedSize,
//             color: selectedColor,
//             quantity: quantity,
//             image: mainImage
//         };

//         // Get existing cart from localStorage
//         let cart = JSON.parse(localStorage.getItem("cart")) || [];

//         // Check if the product with the same size and color already exists in cart
//         const existingItemIndex = cart.findIndex(
//             (item) => item.name === cartItem.name && item.size === cartItem.size && item.color === cartItem.color
//         );

//         if (existingItemIndex !== -1) {
//             cart[existingItemIndex].quantity += quantity; // Update quantity
//         } else {
//             cart.push(cartItem); // Add new item to cart
//         }

//         localStorage.setItem("cart", JSON.stringify(cart));

//         toast.success(`${selectedProduct.name} added to cart successfully!`);
//         setTimeout(() => 
//             setIsButtonDisabled(false),
//          1000); // Re-enable button after a short delay
//     };

//     return (
//         <div className="p-6">
//             <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//                 <div className="flex flex-col md:flex-row gap-6">
//                     {/* Left Side - Thumbnails */}
//                     <div className="flex md:flex-col flex-row space-x-2 md:space-x-0 md:space-y-4">
//                         {selectedProduct.images.map((image, index) => (
//                             <img
//                                 key={index}
//                                 src={image.url}
//                                 alt={image.altText || `Thumbnail ${index}`}
//                                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
//                                     mainImage === image.url ? "border-black" : "border-gray-300"
//                                 }`}
//                                 onClick={() => setMainImage(image.url)}
//                             />
//                         ))}
//                     </div>

//                     {/* Right Side - Main Image */}
//                     <div className="md:w-1/2">
//                         <img src={mainImage} alt="Main Product" className="w-full h-auto object-cover rounded-lg" />
//                     </div>

//                     {/* Product Details */}
//                     <div className="md:w-1/2 md:ml-10">
//                         <h1 className="text-2xl md:text-3xl font-semibold mb-2">{selectedProduct.name}</h1>
//                         <div className="flex items-center space-x-2">
//                             <p className="text-xl font-bold text-black">${selectedProduct.price}</p>
//                             <p className="text-lg text-gray-600 line-through">${selectedProduct.originalPrice}</p>
//                         </div>
//                         <p className="text-gray-700 mt-2">{selectedProduct.description}</p>

//                         {/* Sizes */}
//                         <div className="mt-4">
//                             <h3 className="font-semibold">Available Sizes:</h3>
//                             <div className="flex space-x-2 mt-2">
//                                 {selectedProduct.sizes.map((size) => (
//                                     <span
//                                         key={size}
//                                         onClick={() => setSelectedSize(size)}
//                                         className={`px-3 py-1 border rounded-lg cursor-pointer ${
//                                             selectedSize === size ? "bg-black text-white" : "bg-gray-100"
//                                         }`}
//                                     >
//                                         {size}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Colors */}
//                         <div className="mt-4">
//                             <h3 className="font-semibold">Available Colors:</h3>
//                             <div className="flex space-x-2 mt-2">
//                                 {selectedProduct.colors.map((color) => (
//                                     <span
//                                         key={color}
//                                         onClick={() => setSelectedColor(color)}
//                                         className={`px-3 py-1 border rounded-lg cursor-pointer ${
//                                             selectedColor === color ? "bg-black text-white" : "bg-gray-100"
//                                         }`}
//                                     >
//                                         {color}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Quantity */}
//                         <div className="mt-4">
//                             <h3 className="font-semibold">Quantity:</h3>
//                             <div className="flex items-center space-x-4 mt-2">
//                                 <button
//                                     onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
//                                     className="px-2 py-1 bg-gray-200 rounded text-lg"
//                                 >
//                                     -
//                                 </button>
//                                 <span className="text-lg">{quantity}</span>
//                                 <button
//                                     onClick={() => setQuantity(quantity + 1)}
//                                     className="px-2 py-1 bg-gray-200 rounded text-lg"
//                                 >
//                                     +
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Add to Cart Button */}
//                         <button
//                             onClick={handleAddToCart}
//                             className={`mt-6 px-6 py-3 rounded-lg ${
//                                 isButtonDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"
//                             }`}
//                             disabled={isButtonDisabled}
//                         >
//                             {isButtonDisabled ? "Adding..." : "Add to Cart"}
//                         </button>
//                     </div>
//                 </div> 
//             </div>  
//             <div className="mt-20">
//                 <h2 className="text-2xl text-center font-medium mb-4">
//                     You May Also Like
//                 </h2>
//                 <ProductGrid  products={similarProducts}/>    
//                 </div>      
//         </div>
//     );
// };

// export default ProductDetails;    






import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import addToCartAPI from "../../api/cartAPI";

const selectedProduct = {
  _id: "6800e47bb583fdd016745e83",
  name: "Classic Oxford Button-Down Shirt",
  price: 39.99,
  // originalPrice: 150,
  description: "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs..",
  brand: "Urban Threads",
  material: "Cotton",
  sizes: ["S", "M", "L", "XL" , "XXL"],
  colors: ["Red", "Blue" , "yellow"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=39",
      altText: "Classic Oxford Button-Down Shirt 39",
    },
    {
      url: "https://picsum.photos/500/500?random=40",
      altText: "Classic Oxford Button-Down Shirt 40",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Classic Hoodie",
    price: 799,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 2,
    name: "Denim Jacket",
    price: 1499,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 3,
    name: "Running Shoes",
    price: 2199,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: 4,
    name: "Leather Wallet",
    price: 499,
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
];


const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(selectedProduct.images[0].url);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    let guestId = localStorage.getItem("guestId");
    if (!guestId) {
      guestId = crypto.randomUUID();
      localStorage.setItem("guestId", guestId);
    }

    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  const handleAddToCart = async () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    const userId = localStorage.getItem("userId");
    const guestId = localStorage.getItem("guestId");

    const productId = selectedProduct._id;

    const payload = {
      productId,
      quantity,
      size: selectedSize,
      color: selectedColor,
      ...(userId ? { userId } : { guestId }),

      
    };
    console.log("Payload being sent to backend:", payload);

    try {
      await addToCartAPI(payload);
      toast.success("Item added to cart successfully!", { duration: 1000 });
    } catch (error) {
      console.warn("Backend cart API failed, falling back to localStorage.");

      const cartItem = {
        productId,
        name: selectedProduct.name,
        price: selectedProduct.price,
        size: selectedSize,
        color: selectedColor,
        quantity,
        image: mainImage,
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItemIndex = cart.findIndex(
        (item) =>
          item.productId === cartItem.productId &&
          item.size === cartItem.size &&
          item.color === cartItem.color
      );

      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
      } else {
        cart.push(cartItem);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      // 👇 Yeh line event bhej rahi hai cart update hone ka
      window.dispatchEvent(new Event("cartUpdated"));

      toast.success(`${selectedProduct.name} added to cart (guest)!`, {
        duration: 1000,
      });
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex md:flex-col flex-row space-x-2 md:space-x-0 md:space-y-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url
                    ? "border-black"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          <div className="md:w-1/2">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <div className="flex items-center space-x-2">
              <p className="text-xl font-bold text-black">
                ${selectedProduct.price}
              </p>
              <p className="text-lg text-gray-600 line-through">
                ${selectedProduct.originalPrice}
              </p>
            </div>
            <p className="text-gray-700 mt-2">
              {selectedProduct.description}
            </p>

            <div className="mt-4">
              <h3 className="font-semibold">Available Sizes:</h3>
              <div className="flex space-x-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <span
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded-lg cursor-pointer ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">Available Colors:</h3>
              <div className="flex space-x-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <span
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 border rounded-lg cursor-pointer ${
                      selectedColor === color
                        ? "bg-black text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">Quantity:</h3>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : 1)
                  }
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`mt-6 px-6 py-3 rounded-lg ${
                isButtonDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
              disabled={isButtonDisabled}
            >
              {isButtonDisabled ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl text-center font-medium mb-4">
          You May Also Like
        </h2>
        <ProductGrid products={similarProducts} />
      </div>
    </div>
  );
};

export default ProductDetails;

