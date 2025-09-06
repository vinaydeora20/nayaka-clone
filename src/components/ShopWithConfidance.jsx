
const ShopWithConfidance = () => {

  return (

    <div className="flex flex-row justify-between items-center bg-white rounded-lg shadow-inner px-4 py-3 gap-4">
    <div className="flex flex-col items-center text-center">
      <img
        className="h-8"
        src="http://trollybags.shop/assets/images/replacement.png"
        alt="7 days Replacement"
      />
      <span className=" text-sm my-2">7 days Return Policy</span>
    </div>
    <div className="flex flex-col items-center text-center">
      <img
        className="h-8"
        src="http://trollybags.shop/assets/images/non-cod.png"
        alt="No Cash On Delivery"
      />
      <span className=" text-sm whitespace-nowrap my-2">No Cash On Delivery</span>
    </div>
    <div className="flex flex-col items-center text-center">
      <img
        className="w-16 mb-2 mt-1"
        src="http://trollybags.shop/assets/images/plue-fassured.png"
        alt="Plus (F-Assured)"
      />
      <span className=" text-sm whitespace-nowrap my-2">Plus (F-Assured)</span>
    </div>
  </div>
  );
};

export default ShopWithConfidance;
