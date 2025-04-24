
import React from 'react';
import { Link } from 'react-router-dom';
import menCollectionImage from "../../assets/image/mens-collection.webp";
import womensCollectionImage from "../../assets/image/womens-collection.webp";

const GenderCollectionSection = () => {
  return (
    <section className='py-6 px-4 lg:px-0'>
      <div className='container mx-auto flex flex-col md:flex-row gap-8'>
        
        {/* Women's Collection */}
        <div className="relative flex-1">
          <img 
            src={womensCollectionImage} 
            alt="Women's Collection" 
            className="w-full h-[700px] object-cover"
          />
          <div className='absolute bottom-8 left-8 bg-white/90 p-4 rounded-lg shadow-lg'>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link to="/collection/all?gender=women"
              className="text-gray-900 underline hover:text-gray-700 transition">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's Collection */} 
        <div className="relative flex-1">
          <img 
            src={menCollectionImage} 
            alt="Men's Collection" 
            className="w-full h-[700px] object-cover"
          />
          <div className='absolute bottom-8 left-8 bg-white/90 p-4 rounded-lg shadow-lg'>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link to="/collection/all?gender=men"
              className="text-gray-900 underline hover:text-gray-700 transition">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
