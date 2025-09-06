import { useState } from "react";

const useProducts = (mobId) => {
  const [productMenu, setProductMenu] = useState({
    id: mobId || "iphone-13-pro",
    name: "iPhone 13 Pro",
    category: "Mobile",
    avgRating: 4.5,
    price: 99999,
    cloudinaryImageId: "iphone13pro-image-id",
 
  });

  return productMenu;
};

export default useProducts;
