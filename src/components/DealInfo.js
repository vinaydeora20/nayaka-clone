
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../utils/cartSlice";
import ShopWithConfidance from "./ShopWithConfidance";
import CustomerReview from "./CustomerReview";

const deals = [
  {
    id: "1",
    product: {
      name: "Wireless Bluetooth Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Audio",
      description: "Noise cancelling with 30hr battery",
    },
    discount: 30,
    originalPrice: 129.99,
    salePrice: 90.99,
    soldPercentage: 65,
    avgRating: "4.5",
  },
  {
    id: "2",
    product: {
      name: "Smart Fitness Watch",
      image:
        "https://images.unsplash.com/photo-1588776814546-d626ee40d9d9?auto=format&fit=crop&w=500&q=60",
      category: "Wearables",
      description: "Heart rate monitor, step tracking, sleep analysis",
    },
    discount: 20,
    originalPrice: 99.99,
    salePrice: 79.99,
    soldPercentage: 80,
    avgRating: "4.2",
  },
  {
    id: "3",
    product: {
      name: "Portable Bluetooth Speaker",
      image:
        "https://images.unsplash.com/photo-1518443895471-f96f12cbe92c?auto=format&fit=crop&w=500&q=60",
      category: "Audio",
      description: "Waterproof, 12-hour battery life, compact size",
    },
    discount: 15,
    originalPrice: 49.99,
    salePrice: 42.49,
    soldPercentage: 55,
    avgRating: "4.6",
  },
  {
    id: "4",
    product: {
      name: "Noise Cancelling Earbuds",
      image:
        "https://images.unsplash.com/photo-1571867424485-d6e76b7b0d29?auto=format&fit=crop&w=500&q=60",
      category: "Audio",
      description: "Wireless, in-ear, with charging case",
    },
    discount: 25,
    originalPrice: 59.99,
    salePrice: 44.99,
    soldPercentage: 70,
    avgRating: "4.3",
  },
  {
    id: "5",
    product: {
      name: "4K Action Camera",
      image:
        "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?auto=format&fit=crop&w=500&q=60",
      category: "Camera",
      description: "Waterproof, wide-angle lens, 4K recording",
    },
    discount: 35,
    originalPrice: 150.0,
    salePrice: 97.5,
    soldPercentage: 60,
    avgRating: "4.7",
  },
];

const DealInfo = () => {
  const { mobId } = useParams();
  const [relatedDeals, setRelatedDeals] = useState([]);
  const dispatch = useDispatch();

  const AddProductToCart = () => {
    relatedDeals.forEach((deal) => {
      dispatch(addItem(deal)); // or deal.product depending on design
    });
    toast.success("All combo items added to cart! 🛒");
  };

  useEffect(() => {
    const foundDeal = deals.find((deal) => deal.id === mobId);
    const otherDeals = deals.filter((deal) => deal.id !== mobId).slice(0, 4);
    const finalDeals = foundDeal ? [foundDeal, ...otherDeals] : otherDeals;
    setRelatedDeals(finalDeals);
  }, [mobId]);

  if (relatedDeals.length === 0) return <div>Loading...</div>;

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Grab Your Combo Deal!</h2>

        {relatedDeals.map((deal) => {
          const { product, discount, originalPrice, salePrice, avgRating } = deal;
          return (
            <div key={deal.id} className="flex flex-wrap mb-12 border-b pb-6">
              <div className="w-full md:w-1/3 mb-6 md:mr-6">
                <img
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.category}</p>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                <p className="text-gray-600 text-sm mt-2">Rating: {avgRating} ⭐</p>
                <p className="text-gray-600 text-sm mt-2">
                  Price: <span className="font-bold">${salePrice}</span>{" "}
                  <span className="line-through text-gray-400 ml-2">
                    ${originalPrice}
                  </span>
                </p>
              </div>
            </div>
          );
        })}

        <div className="flex justify-start mt-8 gap-4">
          <button
            onClick={AddProductToCart}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2.5 rounded-full"
          >
            Add All to Cart
          </button>
          <button
            onClick={AddProductToCart}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full"
          >
            Buy All Now
          </button>
        </div>
      </div>

      <ShopWithConfidance />
      <CustomerReview />
    </>
  );
};

export default DealInfo;
