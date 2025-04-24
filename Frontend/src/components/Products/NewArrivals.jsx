import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    { _id: "1", name: "Stylish Jacket", price: 120, images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }] },
    { _id: "2", name: "Casual Shirt", price: 90, images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Casual Shirt" }] },
    { _id: "3", name: "Denim Jeans", price: 150, images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Denim Jeans" }] },
    { _id: "4", name: "Leather Jacket", price: 200, images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Leather Jacket" }] },
    { _id: "5", name: "Sneakers", price: 80, images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Sneakers" }] },
    { _id: "6", name: "Formal Shirt", price: 100, images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Formal Shirt" }] },
    { _id: "7", name: "Chinos", price: 110, images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Chinos" }] },
    { _id: "8", name: "Hoodie", price: 130, images: [{ url: "https://picsum.photos/500/500?random=8", altText: "Hoodie" }] },
  ];

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className='py-16 px-4 lg:px-0'>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to keep you on the cutting edge of fashion.
        </p>

        {/* Scroll buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button onClick={() => scroll("left")} disabled={!canScrollLeft}
            className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}> 
            <FiChevronLeft className="text-2xl" />
          </button>
          <button onClick={() => scroll("right")} disabled={!canScrollRight}
            className={`p-2 rounded border ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div ref={scrollRef} className="container mx-auto overflow-x-auto whitespace-nowrap flex space-x-6 p-4">
        {newArrivals.map((product) => (
          <div key={product._id} className="min-w-[250px] sm:min-w-[200px] lg:min-w-[180px] relative">
            <img src={product.images[0]?.url} alt={product.images[0]?.altText || product.name} className="w-full h-[300px] object-cover rounded-lg" draggable="false" />
            <h3 className="text-lg font-semibold mt-2 text-center">{product.name}</h3>
            <p className="text-gray-700 text-center">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;   
