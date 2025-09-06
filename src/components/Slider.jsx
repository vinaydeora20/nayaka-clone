
import React, { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://static.vecteezy.com/system/resources/previews/006/633/027/non_2x/online-delivery-service-home-office-warehouse-cartoon-paper-art-on-mobile-illustration-shopping-online-vector.jpg",
    "https://www.shutterstock.com/image-vector/super-sale-creative-banner-90-260nw-1210271824.jpg",
    "https://static.vecteezy.com/system/resources/previews/005/454/827/original/happy-valentine-s-day-sale-banner-or-promotion-on-blue-background-online-shopping-store-with-mobile-credit-cards-and-shop-elements-illustration-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/006/753/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/711/859/non_2x/women-s-style-online-shop-on-mobile-sale-and-promotion-campaign-shopping-online-banner-concept-vector.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // changed to 3s for better UX

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] sm:h-[30vh] md:h-[35vh] lg:h-[45vh] overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full  transition-opacity duration-700"
      />
    </div>
  );
};

export default Slider;
