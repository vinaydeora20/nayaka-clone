
import React from "react";

const ProductCard = ({
  name,
  cloudinaryImageId,
  category,
  avgRating,
  price,
  discountPrice,
  description,
      discount,
}) => {
  // Calculate discount percentage
  const getDiscountPercentage = () => {
    if (!price || !discountPrice) return "0";
    const original = parseFloat(price.replace(/[^0-9.]/g, ''));
    const discounted = parseFloat(discountPrice.replace(/[^0-9.]/g, ''));
    return Math.round(((original - discounted) / original) * 100);
  };

  // Star rating component
  const renderStars = (rating) => {
    const numericRating = rating === "--" ? 4.2 : parseFloat(rating);
    const fullStars = Math.floor(numericRating);
    const hasHalfStar = numericRating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#E5E7EB" />
              </linearGradient>
            </defs>
            <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full sm:w-48 md:w-56 lg:w-60 bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 border border-gray-100">
      {/* Image with badges */}
      <div className="relative h-40 sm:h-48 md:h-52 lg:h-60 bg-white p-2 sm:p-4">
        <img
          className="w-full h-full object-contain"
          src={cloudinaryImageId}
          alt={name}
          loading="lazy"
        />
        
        {/* Top badges */}
        <div className="absolute top-2 left-2">
          <span className="bg-[#ff3e6c] text-white text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 rounded font-medium">
       {discount}
          </span>
        </div>
        
        <button className="absolute top-2 right-2 w-6 h-6 xs:w-7 xs:h-7 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-50">
          <svg className="w-3 h-3 xs:w-4 xs:h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Product details */}
      <div className="p-2 sm:p-3">
        {/* Brand and name */}
        <p className="text-gray-500 text-[10px] xs:text-xs font-medium uppercase tracking-wide mb-0.5 xs:mb-1">
          {category}
        </p>
        <h3 className="text-xs xs:text-sm text-gray-800 font-medium mb-1 xs:mb-2 leading-tight line-clamp-2 h-8 xs:h-10">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-1 xs:mb-2">
          {renderStars(avgRating)}
          <span className="text-gray-500 text-[10px] xs:text-xs ml-0.5 xs:ml-1">
            ({avgRating === "--" ? "4.2" : parseFloat(avgRating).toFixed(1)})
          </span>
        </div>
        
        {/* Price */}
        <div className="mb-1 xs:mb-2">
          <span className="text-[#ff3e6c] font-bold text-base xs:text-lg">₹{discountPrice}</span>
          <span className="text-gray-400 text-xs xs:text-sm line-through ml-1 xs:ml-2">
            ₹{price}
          </span>
          <span className="text-green-600 text-[10px] xs:text-xs font-medium ml-1 xs:ml-2">
            {getDiscountPercentage()}% OFF
          </span>
        </div>
        
        {/* Delivery info */}
        <p className="text-blue-600 text-[10px] xs:text-xs font-medium flex items-center">
          <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 mr-0.5 xs:mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Free Delivery
        </p>
      </div>
    </div>
  );
};

export default ProductCard;