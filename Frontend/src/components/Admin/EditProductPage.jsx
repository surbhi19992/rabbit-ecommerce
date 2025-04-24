
import React, { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "Classic Oxford Button-Down Shirt",
    description:
      "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit.",
    price: 39.99,
    countInStock: 20,
    sku: "OX-SH-001",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black"],
    images: [
      {
        url: "https://picsum.photos/id/1015/100",
      },
      {
        url: "https://picsum.photos/id/1016/100",
      },
    ],                  
  });

  const [newImage, setNewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "sizes" || name === "colors") {
      setProductData({ ...productData, [name]: value.split(",").map(s => s.trim()) });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewImage(file.name);
      setProductData({
        ...productData,
        images: [...productData.images, { url: imageUrl }], 
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated product:", productData);
    // Add actual update logic here (API call etc.)
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Edit Product</h2>
      <form
        className="bg-white p-6 rounded shadow space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-medium">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 w-full p-2 border rounded"
          ></textarea>
        </div>

        <div>
          <label className="font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-medium">Count in Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-medium">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-medium">Sizes (comma-separated)</label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded bg-blue-50"
          />
        </div>

        <div>
          <label className="font-medium">Colors (comma-separated)</label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded bg-blue-50"
          />
        </div>


        <div>
  <label className="font-semibold block mb-2">Upload Image</label>
  <div className="flex items-center space-x-3">
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      className="block"
    />
    {newImage && (
      <span className="text-sm text-gray-700 truncate max-w-[200px]">
        {newImage}
      </span>
    )}
  </div>
</div>



        {/* <div>
          <label className="font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block"
          />
        </div> */}

        <div className="flex space-x-2">
          {productData.images.map((img, idx) => (
            <img
              key={idx}
              src={img.url}
              alt={`product-${idx}`}
              className="w-20 h-20 object-cover rounded border"
            />
          ))}
        </div>    

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded mt-4"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;


