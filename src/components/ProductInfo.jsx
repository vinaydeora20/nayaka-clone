
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, buyProduct } from "../utils/cartSlice";
import { toast } from "react-toastify";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";
import dummyData from "../data/ProductInfo.json";
import similarProducts from '../data/SimilarProducts.json';
import Checkout from "../components/Checkout";
 import ProductCard from "./ProductCard";

import Footer from "./Footer";
const ProductInfo = () => {
  const [filterRestaurants, setfilterRestaurants] = useState(similarProducts);
  const { mobId } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const [product, setProduct] = useState(null);
  const [isCheckout, setIsCheckout] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    setfilterRestaurants(similarProducts);
  };

  useEffect(() => {
    const productData = dummyData.find((item) => item.info.id === mobId);
    setProduct(productData);
  }, [mobId]);

  const handleBuyNow = (product) => {

    dispatch(buyProduct({...product, size: selectedSize, quantity}));
    setIsCheckout(true);
  };

  const AddProductToCart = (product) => {

    dispatch(addItem({...product, size: selectedSize, quantity}));
    toast.success("Product added to cart! 🛒");
  };

  if (!product || !product.info || !product.info.images) {
    return (
      <div className="text-center text-xl text-gray-600 py-20">Loading...</div>
    );
  }

  if (isCheckout) {
    return (
      <Checkout
        cartItems={cartItems}
        onBackToCart={() => setIsCheckout(false)}
      />
    );
  }

  const galleryImages = product.info.images.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3 text-sm text-gray-600">
        <Link to="/">Home</Link> / <Link to="/category">Category</Link> / <span className="text-gray-800">{product.info.name}</span>
      </div>

      {/* Main Product Section */}
      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row">
        {/* Image Gallery */}
        <div className="lg:w-1/2 lg:pr-8">
          <div className="sticky top-4">
            <ImageGallery 
              items={galleryImages} 
              showPlayButton={false}
              showFullscreenButton={true}
              showNav={true}
              thumbnailPosition="bottom"
              additionalClass="product-gallery"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <h1 className="text-2xl font-medium text-gray-900">{product.info.name}</h1>
          
          {/* Brand */}
          <div className="mt-2">
            <span className="text-sm text-gray-500">Brand: </span>
            <span className="text-sm font-medium">{product.info.brand || 'Nykaa'}</span>
          </div>
          
          {/* Ratings */}
          <div className="mt-3 flex items-center">
            <div className="flex items-center bg-green-100 px-2 py-1 rounded">
              <span className="text-green-800 font-medium">{product.info.rating || '4.2'}</span>
              <svg className="w-4 h-4 ml-1 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.info.reviews || '1254'} Reviews)</span>
          </div>
          
          {/* Price */}
          <div className="mt-4">
            <span className="text-2xl font-bold text-gray-900">₹{product.info.discountPrice}</span>
            {product.info.price && (
              <>
                <span className="text-lg text-gray-500 line-through ml-2">₹{product.info.price}</span>
                <span className="text-green-600 font-medium ml-2">{product.info.discount || '20% OFF'}</span>
              </>
            )}
          </div>
          
          {/* Offers */}
          <div className="mt-4 bg-pink-50 p-3 rounded">
            <h3 className="text-sm font-medium text-gray-900">Available offers</h3>
            <ul className="mt-2 text-xs text-gray-600 space-y-1">
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Get 10% off on first purchase. Use code WELCOME10</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Get extra 5% off on prepaid orders</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Buy 2 get 1 free on selected items</span>
              </li>
            </ul>
          </div>
          
     
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => AddProductToCart(product)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-pink-500 text-sm font-semibold text-pink-500 rounded-md hover:bg-pink-50 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-pink-500"
              >
                <path d="M11.236 20L10.7088 19.5061L3.40816 12.2658C2.93322 11.7856 2.56345 11.213 2.32209 10.5841C2.08074 9.95511 1.97302 9.28336 2.00572 8.61106C2.02807 7.93784 2.19282 7.27683 2.48928 6.67099C2.78574 6.06516 3.20726 5.52806 3.72645 5.09461C4.70809 4.32587 5.94186 3.94582 7.18926 4.02792C8.43666 4.11002 9.60913 4.64844 10.48 5.53911L11.236 6.28981L11.9521 5.54899C12.8225 4.64399 14.0026 4.09542 15.2599 4.01133C16.5173 3.92723 17.7607 4.31369 18.7455 5.09461C19.3795 5.61903 19.869 6.29471 20.1682 7.05832C20.4674 7.82194 20.5666 8.6485 20.4563 9.46054C20.4299 9.65047 20.3286 9.82221 20.1747 9.93799C20.0208 10.0538 19.8269 10.1041 19.6357 10.0779C19.4444 10.0517 19.2715 9.95112 19.1549 9.7983C19.0383 9.64547 18.9877 9.45292 19.014 9.26299C19.0889 8.69472 19.0178 8.11689 18.8074 7.58324C18.597 7.04959 18.254 6.57747 17.8105 6.21079C17.1101 5.67163 16.2333 5.40955 15.3496 5.47523C14.4659 5.54092 13.6381 5.92969 13.0263 6.56638L11.236 8.34436L9.45556 6.57626C8.84378 5.93957 8.016 5.55079 7.13229 5.48511C6.24859 5.41943 5.37175 5.68151 4.67135 6.22067C4.30134 6.51984 3.99992 6.89401 3.78722 7.31816C3.57453 7.74232 3.45547 8.20668 3.438 8.6802C3.41812 9.15159 3.49617 9.622 3.66729 10.0621C3.83841 10.5023 4.09893 10.9027 4.43264 11.2385L11.236 17.9948L13.454 15.8316C13.5898 15.7081 13.7672 15.6395 13.9513 15.6395C14.1355 15.6395 14.3129 15.7081 14.4486 15.8316C14.5752 15.9654 14.6457 16.142 14.6457 16.3255C14.6457 16.509 14.5752 16.6857 14.4486 16.8194L11.3454 19.9111L11.236 20Z" />
              </svg>
              ADD TO WISHLIST
            </button>
            
            <button
              onClick={() => handleBuyNow(product)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-pink-500 text-sm font-semibold text-white rounded-md hover:bg-pink-600 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white"
              >
                <path d="M21.4474 6.97354H16.9211V6.65608C17.0263 4.1164 15.0263 2 12.5 2C9.97368 2.10582 8.07895 4.1164 8.07895 6.65608V6.97354H3.55263C2.92105 6.97354 2.5 7.39683 2.5 8.03175V16.709C2.5 19.672 4.81579 22 7.76316 22H17.2368C20.1842 22 22.5 19.672 22.5 16.709V8.03175C22.5 7.50265 22.0789 6.97354 21.4474 6.97354ZM9.6579 6.65608C9.6579 5.06878 10.9211 3.69312 12.5 3.5873C14.0789 3.69312 15.3421 5.06878 15.3421 6.65608V6.97354H9.6579V6.65608ZM20.9211 16.8148C20.9211 18.8254 19.2368 20.5185 17.2368 20.5185H7.76316C5.76316 20.5185 4.07895 18.8254 4.07895 16.8148V8.56085H8.07895V10.6772C7.86842 10.8889 7.76316 11.2063 7.76316 11.418C7.76316 12.0529 8.28947 12.4762 8.81579 12.4762C9.34211 12.4762 9.86842 11.9471 9.86842 11.418C9.86842 11.1005 9.76316 10.8889 9.55263 10.6772V8.56085H15.2368V10.5714C15.0263 10.7831 14.9211 11.1005 14.9211 11.418C14.9211 12.0529 15.3421 12.582 15.9737 12.582C16.6053 12.582 17.1316 12.1587 17.1316 11.5238C17.1316 11.2063 17.0263 10.9947 16.8158 10.7831V8.66667H20.9211V16.8148Z" />
              </svg>
             BUY NOW
            </button>
          </div>
          
          {/* Delivery Options */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-gray-900">Delivery Options</h3>
            <div className="mt-3 flex items-center">
              <input type="text" placeholder="Enter pincode" className="w-48 px-3 py-2 border border-gray-300 rounded-md text-sm" />
              <button className="ml-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200">Check</button>
            </div>
            <div className="mt-3 text-sm text-gray-600">
              <p>Standard Delivery: 3-5 business days</p>
              <p className="mt-1">Express Delivery: 1-2 business days (Additional charges may apply)</p>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-gray-900">Product Details</h3>
            <div className="mt-3 text-sm text-gray-600 space-y-2">
              <p>{product.info.description}</p>
              <p><span className="font-medium">Brand:</span> {product.info.brand || 'Nykaa'}</p>
                {/* <p><span className="font-medium">Formulation:</span> {product.info.formulation || 'Liquid'}</p>
                <p><span className="font-medium">Skin Type:</span> {product.info.skinType || 'All skin types'}</p>
                <p><span className="font-medium">Benefits:</span> {product.info.benefits || 'Moisturizes, nourishes, and protects skin'}</p> */}
            </div>
          </div>
        </div>
      </div>

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
            <Footer />
    </div>
  );
};

export default ProductInfo;