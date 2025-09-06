import React, { useState, useEffect } from 'react';
import { BoltIcon, FireIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
const DealItem = ({ product, discount, originalPrice, salePrice, soldPercentage, avgRating , id}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 hover:z-10 transform transition-transform duration-300 ease-in-out">
           <Link to={`/deals/${id}`} className="block">
      <div className="relative">
        <img
          className="w-full h-56 object-cover"
          src={product.image}
          alt={product.name}
        />
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full mt-1.5">
          {discount}% OFF
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold pl-2">{product.name}</h3>
        <p className="text-gray-600 text-sm overflow-ellipsis overflow-hidden pl-2">
          {product.category || 'Electronics'}
        </p>
        <p className="text-gray-600 text-sm pl-2">{product.description || 'Premium quality product'}</p>
        <p className="text-gray-600 text-sm pl-2">
          {avgRating || '4.2'} ⭐⭐⭐⭐⭐
        </p>
        <p className="text-gray-600 text-sm pl-2">
          Price: <span className="font-bold">${salePrice}</span> <span className="line-through text-gray-400">${originalPrice}</span>
        </p>
        <div className="flex items-center mt-2 mb-2 pl-2">
          <span className="text-[#a0522d] text-sm">
            10% off | Use SAVE10
          </span>
        </div>
        </div>
        </Link>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: Math.floor(hours),
        minutes: Math.floor(minutes),
        seconds: Math.floor(seconds)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="bg-gray-800 text-white px-3 py-1 rounded-md">
        <span className="font-mono font-bold text-lg">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-xs">h</span>
      </div>
      <span className="text-gray-800 font-bold">:</span>
      <div className="bg-gray-800 text-white px-3 py-1 rounded-md">
        <span className="font-mono font-bold text-lg">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-xs">m</span>
      </div>
      <span className="text-gray-800 font-bold">:</span>
      <div className="bg-gray-800 text-white px-3 py-1 rounded-md">
        <span className="font-mono font-bold text-lg">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-xs">s</span>
      </div>
    </div>
  );
};

const DealsOfTheDay = () => {
  // Set target time to end of current day
  const targetDate = new Date();
  targetDate.setHours(23, 59, 59, 999);

  const deals = [
    {
      id:'1',
      product: {
       
        name: 'Wireless Bluetooth Headphones',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Audio',
        description: 'Noise cancelling with 30hr battery'
      },
      discount: 30,
      originalPrice: 129.99,
      salePrice: 90.99,
      soldPercentage: 65,
      avgRating: '4.5'
      },
    {
      id:'2',
        product: {
         
          name: 'Wireless Bluetooth Headphones',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          category: 'Audio',
          description: 'Noise cancelling with 30hr battery'
        },
        discount: 30,
        originalPrice: 129.99,
        salePrice: 90.99,
        soldPercentage: 65,
        avgRating: '4.5'
      },
    {
      id:'3',
        product: {
      
          name: 'Wireless Bluetooth Headphones',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          category: 'Audio',
          description: 'Noise cancelling with 30hr battery'
        },
        discount: 30,
        originalPrice: 129.99,
        salePrice: 90.99,
        soldPercentage: 65,
        avgRating: '4.5'
      },
    // Additional deal items...
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Deals of the Day</h2>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div className="flex flex-wrap -mx-4">
        {deals.map((deal, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <DealItem {...deal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheDay;
