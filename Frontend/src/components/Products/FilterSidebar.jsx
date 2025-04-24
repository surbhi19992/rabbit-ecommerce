
// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// const FilterSidebar = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [filter, setFilter] = useState({
//     category: "",
//     gender: "",
//     color: "",
//     size: [],
//     material: [],
//     brand: [],
//     minPrice: 0,
//     maxPrice: 100,
//   });

//   const [priceRange, setPriceRange] = useState([0, 100]);

//   useEffect(() => {
//     const params = Object.fromEntries([...searchParams]);
//     setFilter({
//       category: params.category || "",
//       gender: params.gender || "",
//       color: params.color || "",
//       size: params.size ? params.size.split(",") : [],
//       material: params.material ? params.material.split(",") : [],
//       brand: params.brand ? params.brand.split(",") : [],
//       minPrice: Number(params.minPrice) || 0,
//       maxPrice: Number(params.maxPrice) || 100,
//     });
//     setPriceRange([0, Number(params.maxPrice) || 100]);
//   }, [searchParams]);

//   const handleFilterChange = (e) => {
//     const { name, value, checked, type } = e.target;
//     let newFilter = {...filter};

//     if(type ==="checkbox"){
//       if(checked){
//         newFilter[name] = [...(newFilter [name] || []), value];     
//       } else {
//         newFilter[name] = newFilter[name].filter((item) =>item !== value);
//       }
//     }
//   };
//     // Console में output log करने के लिए
//     console.log({ name, value, checked, type });
    

//     setFilter((prev) => {
//       if (type === "checkbox") {
//         return {
//           ...prev,
//           [name]: checked
//             ? [...prev[name], value]
//             : prev[name].filter((item) => item !== value),
//         };
//       } else {
//         return { ...prev, [name]: value };
//       }
//     });
//   };

//   const categories = ["Top Wear", "Bottom Wear"];
//   const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"];
//   const sizes = ["XL", "S", "M", "L", "XXL"];
//   const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen", "Viscose", "Fleece"];
//   const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "Fashionista", "ChicStyle"];
//   const genders = ["Men", "Women"];

//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

//       {/* Category Filter */}
//       <div className="mb-6">
//         <label className="block text-gray-600 font-medium mb-2">Category</label>
//         {categories.map((category) => (
//           <div key={category} className="flex items-center mb-1">
//             <input
//               type="radio"
//               name="category"
//               value={category}
//               checked={filter.category === category}
//               onChange={handleFilterChange}
//               className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//             />
//             <label className="text-gray-700">{category}</label>
//           </div>
//         ))}
//       </div>

//       {/* Gender Filter */}
//       <div className="mb-6">
//         <label className="block text-gray-600 font-medium mb-2">Gender</label>
//         {genders.map((gender) => (
//           <div key={gender} className="flex items-center mb-1">
//             <input
//               type="radio"
//               name="gender"
//               value={gender}
//               checked={filter.gender === gender}
//               onChange={handleFilterChange}
//               className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//             />
//             <label className="text-gray-700">{gender}</label>
//           </div>
//         ))}
//       </div>

//       {/* Color Filter */}
//       <div className="mb-6">
//         <label className="block text-gray-600 font-medium mb-2">Color</label>
//         <div className="flex flex-wrap gap-2">
//           {colors.map((color) => (
//             <button
//               key={color}
//               name="color"
//               value={color}
//               onClick={(e) => {
//                 console.log({ name: "color", value: color, checked: true, type: "button" });
//                 setFilter((prev) => ({ ...prev, color }));
//               }}
//               className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105"
//               style={{ backgroundColor: color.toLowerCase() }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Size Filter */}
//       <div className="mb-6">
//         <label className="block text-gray-600 font-medium mb-2">Size</label>
//         {sizes.map((size) => (
//           <div key={size} className="flex items-center mb-1">
//             <input
//               type="checkbox"
//               name="size"
//               value={size}
//               checked={filter.size.includes(size)}
//               onChange={handleFilterChange}
//               className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//             />
//             <span className="text-gray-700">{size}</span>
//           </div>
//         ))}
//       </div>

//       {/* Material Filter */}
//       <div className="mb-6">
//         <label className="block text-gray-600 font-medium mb-2">Material</label>
//         {materials.map((material) => (
//           <div key={material} className="flex items-center mb-1">
//             <input
//               type="checkbox"
//               name="material"
//               value={material}
//               checked={filter.material.includes(material)}
//               onChange={handleFilterChange}
//               className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//             />
//             <span className="text-gray-700">{material}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterSidebar;




// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// const FilterSidebar = () => {
//   const [searchParams] = useSearchParams();
//   const [filter, setFilter] = useState({
//     category: "",
//     gender: "",
//     color: "",
//     size: [],
//     material: [],
//     brand: [],
//     minPrice: 0,
//     maxPrice: 100,
//   });

//   useEffect(() => {
//     const params = Object.fromEntries([...searchParams]);
//     setFilter({
//       category: params.category || "",
//       gender: params.gender || "",
//       color: params.color || "",
//       size: params.size ? params.size.split(",") : [],
//       material: params.material ? params.material.split(",") : [],
//       brand: params.brand ? params.brand.split(",") : [],
//       minPrice: Number(params.minPrice) || 0,
//       maxPrice: Number(params.maxPrice) || 100,
//     });
//   }, [searchParams]);

//   const handleFilterChange = (e) => {
//     const { name, value, checked, type } = e.target;
    
//     setFilter((prev) => {
//       let newFilter = { ...prev };

//       if (type === "checkbox") {
//         newFilter[name] = checked
//           ? [...newFilter[name], value]
//           : newFilter[name].filter((item) => item !== value);
//       } else {
//         newFilter[name] = value;
//       };
//       const 


//       // कंसोल में लॉग करने के लिए
//       // console.log("Updated Filter:", newFilter);
      
//       return newFilter;
//     });
//   };

//   const categories = ["Top Wear", "Bottom Wear"];
//   const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"];
//   const sizes = ["XL", "S", "M", "L", "XXL"];
//   const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen", "Viscose", "Fleece"];
//   const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "Fashionista", "ChicStyle"];
//   const genders = ["Men", "Women"];

//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

//       {/* Category Filter */}
//       <div className="mb-6">
//         <label className="block text-gray-600 font-medium mb-2">Category</label>
//         {categories.map((category) => (
//           <div key={category} className="flex items-center mb-1">
//             <input
//               type="radio"
//               name="category"
//               value={category}
//               checked={filter.category === category}
//               onChange={handleFilterChange}
//               className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//             />
//             <label className="text-gray-700">{category}</label>
//           </div>
//         ))}
//       </div>

//       {/* Gender Filter */}
//       <div className="mb-6">
//         <label className="block text-gray-600 font-medium mb-2">Gender</label>
//         {genders.map((gender) => (
//           <div key={gender} className="flex items-center mb-1">
//             <input
//               type="radio"
//               name="gender"
//               value={gender}
//               checked={filter.gender === gender}
//               onChange={handleFilterChange}
//               className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//             />
//             <label className="text-gray-700">{gender}</label>
//           </div>
//         ))}
//       </div>

//       {/* Color Filter */}
//       <div className="mb-6">
//         <label className="block text-gray-600 font-medium mb-2">Color</label>
//         <div className="flex flex-wrap gap-2">
//           {colors.map((color) => (
//             <button
//               key={color}
//               name="color"
//               value={color}
//               onClick={() => {
//                 setFilter((prev) => {
//                   let newFilter = { ...prev, color };
//                   console.log("Updated Filter:", newFilter);
//                   return newFilter;
//                 });
//               }}
//               className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105"
//               style={{ backgroundColor: color.toLowerCase() }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Size Filter */}
//       <div className="mb-6">
//         <label className="block text-gray-600 font-medium mb-2">Size</label>
//         {sizes.map((size) => (
//           <div key={size} className="flex items-center mb-1">
//             <input
//               type="checkbox"
//               name="size"
//               value={size}
//               checked={filter.size.includes(size)}
//               onChange={handleFilterChange}
//               className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//             />
//             <span className="text-gray-700">{size}</span>
//           </div>
//         ))}
//       </div>

//       {/* Material Filter */}
//       <div className="mb-6">
//         <label className="block text-gray-600 font-medium mb-2">Material</label>
//         {materials.map((material) => (
//           <div key={material} className="flex items-center mb-1">
//             <input
//               type="checkbox"
//               name="material"
//               value={material}
//               checked={filter.material.includes(material)}
//               onChange={handleFilterChange}
//               className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//             />
//             <span className="text-gray-700">{material}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterSidebar;




// 






import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 100,
    });
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFilter((prev) => {
      let newFilter = { ...prev };

      if (type === "checkbox") {
        newFilter[name] = checked
          ? [...newFilter[name], value]
          : newFilter[name].filter((item) => item !== value);
      } else {
        newFilter[name] = value;
      }

      updateURLParams(newFilter);
      return newFilter;
    });
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });

    setSearchParams(params);
  };

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"];
  const sizes = ["XL", "S", "M", "L", "XXL"];
  const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen", "Viscose", "Fleece"];
  const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "Fashionista", "ChicStyle"];
  const genders = ["Men", "Women"];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filter.category === category}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <label className="text-gray-700">{category}</label>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={filter.gender === gender}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <label className="text-gray-700">{gender}</label>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={() => {
                setFilter((prev) => {
                  let newFilter = { ...prev, color };
                  updateURLParams(newFilter);
                  return newFilter;
                });
              }}
              className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105"
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filter.size.includes(size)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              checked={filter.material.includes(material)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filter.brand.includes(brand)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Price Range</label>
        <div className="flex items-center gap-4">
          <input
            type="number"
            name="minPrice"
            value={filter.minPrice}
            onChange={handleFilterChange}
            min="0"
            max="1000"
            className="w-20 p-1 border rounded-md text-gray-700"
          />
          <span className="text-gray-600">to</span>
          <input
            type="number"
            name="maxPrice"
            value={filter.maxPrice}
            onChange={handleFilterChange}
            min="0"
            max="1000"
            className="w-20 p-1 border rounded-md text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
