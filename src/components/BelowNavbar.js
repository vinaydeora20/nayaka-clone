// import React from 'react';
// import GroceryIcon from '../assets/images/menuIcon1.webp';
// import MobilesIcon from '../assets/images/menuIcon2.webp';
// import FashionIcon from '../assets/images/menuIcon3.webp';
// import LaptopsIcon from '../assets/images/menuIcon4.webp';
// import HomeIcon from '../assets/images/menuIcon5.webp';
// import ElectronicIcon from '../assets/images/menuIcon6.webp';
// import TravelIcon from '../assets/images/menuIcon7.webp';
// import ToysIcon from '../assets/images/menuIcon8.webp';
// import BikesIcon from '../assets/images/menuIcon9.webp';

// const categories = [
//   { image: GroceryIcon, label: 'Grocery' },
//   { image: MobilesIcon, label: 'Mobiles' },
//   { image: FashionIcon, label: 'Fashion' },
//   { image: LaptopsIcon, label: 'Laptops' },
//   { image: HomeIcon, label: 'Home' },
//   { image: ElectronicIcon, label: 'Electronic' },
//   { image: TravelIcon, label: 'Travel' },
//   { image: ToysIcon, label: 'Toys' },
//   { image: BikesIcon, label: 'Bikes' },
// ];

// const BelowNavbar = () => {
//   return (
//     <div className=" bg-white shadow-md flex justify-evenly items-center">
//       {categories.map((item, index) => (
//         <div key={index} className="flex flex-col items-center justify-center " >
//           <img src={item.image} alt={item.label} className=""style={{height:'61px'}} />
//           <p className="text-[14px] font-medium mt-2">{item.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BelowNavbar;
import React from 'react';
import GroceryIcon from '../assets/images/menuIcon1.webp';
import MobilesIcon from '../assets/images/menuIcon2.webp';
import FashionIcon from '../assets/images/menuIcon3.webp';
import LaptopsIcon from '../assets/images/menuIcon4.webp';
import HomeIcon from '../assets/images/menuIcon5.webp';
import ElectronicIcon from '../assets/images/menuIcon6.webp';
import TravelIcon from '../assets/images/menuIcon7.webp';
import ToysIcon from '../assets/images/menuIcon8.webp';
import BikesIcon from '../assets/images/menuIcon9.webp';

const categories = [
  { image: GroceryIcon, label: 'Grocery' },
  { image: MobilesIcon, label: 'Mobiles' },
  { image: FashionIcon, label: 'Fashion' },
  { image: LaptopsIcon, label: 'Laptops' },
  { image: HomeIcon, label: 'Home' },
  // { image: ElectronicIcon, label: 'Electronic' },
  // { image: TravelIcon, label: 'Travel' },
  // { image: ToysIcon, label: 'Toys' },
  // { image: BikesIcon, label: 'Bikes' },
];

const BelowNavbar = () => {
  return (
    <div className="bg-white shadow-md overflow-x-auto">
      <div className="flex flex-wrap md:flex-nowrap justify-start md:justify-evenly items-center gap-4 px-4 py-2 md:py-3 md:px-0 min-w-[600px] md:min-w-0">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center min-w-[70px]">
            <img src={item.image} alt={item.label} className="h-12 md:h-[61px] object-contain" />
            <p className="text-[13px] md:text-[14px] font-medium mt-1 text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BelowNavbar;
