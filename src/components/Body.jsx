
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/filterData";
import DealsOfTheDay from "./DealsOfTheDay";
import Testimonials from "./Testimonials";
import Slider from "./Slider";
import CountdownTimer from "./CountdownTimer";
import Footer from "./Footer";
import BelowNavbar from "./BelowNavbar";
// ✅ Import JSON data
import dummyData from "../data/bodyProducts.json";

  
 
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setfilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    // Use Dummy Data
    setfilterRestaurants(dummyData);
    setAllRestaurants(dummyData);
  };

  return filterRestaurants.length === 0 ? (
    <div className="p-7 m-8 mx-12 ">
      <Shimmer />
    </div>
  ) : (
      <>
    {/* <BelowNavbar /> */}
        
    <Slider />
      <div className="py-8 bg-white">
        
          <CountdownTimer />
    

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
              <div className="flex flex-wrap -mx-2">
                {filterRestaurants?.map((item) => (
                  <div
                    key={item?.info?.id}
                    className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4"
                  >
                    <Link to={`/product/${item.info.id}`}>
                      <ProductCard {...item.info} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
            {/* Tooltip always visible */}
            <div className="mb-2 bg-black text-white text-xs rounded px-2 py-1">
                "Contact us if you face any issues regarding your order."
                  </div>
                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/9501379403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-6 h-6"
                    />
                  </a>
                </div>

          {/* <Testimonials /> */}
          <Footer />

        </div>
        </>
  );
};

export default Body;
