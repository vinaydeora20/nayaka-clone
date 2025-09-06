import React from 'react';

const features = [
  {
    img: 'https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg',
    title: '1900+ Brands',
    subtitle: '1.2 Lakh+ Products',
  },
  {
    img: 'https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg',
    title: 'Free Shipping',
    subtitle: 'On Orders Above ₹299',
  },
  {
    img: 'https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg',
    title: '100% Authentic',
    subtitle: 'Products Sourced Directly',
  },
];

const FeatureBanner = () => {
  return (
    <div className="flex flex-row md:flex-row justify-around items-center bg-white py-10 px-4 gap-6 md:gap-0">
      {features.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center max-w-[200px]">
          <img src={item.img} alt={item.title} className="h-16 mb-2" />
          <div className="text-lg font-semibold">{item.title}</div>
          <div className="text-sm text-gray-600">{item.subtitle}</div>
        </div>
      ))}
    </div>
  );
};

export default FeatureBanner;
