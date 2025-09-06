const OrderSummary = ({
  cartItems,
  formData,
  totalAmount,
  onConfirm,
  onBack,
}) => {
  console.log("formData", formData);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h4 className="font-medium text-lg mb-2">Delivery Information</h4>
  
        <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 ">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Name
              </dt>
              <dd className="text-base font-medium text-gray-900 ">
                {formData.fullName}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-black-500 dark:text-gray-400">
                House Number
              </dt>
              <dd className="text-base font-medium text-green-500">
                {formData.houseNumber}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Phone
              </dt>
              <dd className="text-base font-medium text-gray-900 ">
                {formData.phone}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                pincode
              </dt>
              <dd className="text-base font-medium text-gray-900 ">
                {formData.pincode}
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                roadName
              </dt>
              <dd className="text-base font-medium text-gray-900 ">
                {formData.roadName}
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                City
              </dt>
              <dd className="text-base font-medium text-gray-900 ">
                {formData.city}
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                state
              </dt>
              <dd className="text-base font-medium text-gray-900 ">
                {formData.state}
              </dd>
            </dl>
          </div>
        </div>
      </div>

 
      <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 ">
        <div className="mb-6">
          <h4 className="font-medium text-lg mb-2">Order Items</h4>
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div key={item.info.id} className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    {item.info.name}
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                  ₹{item.info.discountPrice}
                  </dd>
                </dl>
              </div>
            ))}
          </div>
        </div>
        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
          <dt className="text-base font-bold text-gray-500 dark:text-gray-400 ">
            Total
          </dt>
          <dd className="text-base font-bold text-gray-900 ">{totalAmount}</dd>
        </dl>
      </div>

      <div className="flex justify-between items-center gap-4 mt-6">
        <button
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-200"
        >
          Back
        </button>

        <button
          type="button"
          onClick={() =>
            onConfirm({
              items: cartItems,
              total: 500,
              deliveryInfo: formData,
            })
          }
          className="bg-[#ff3e6c] text-white font-medium rounded-lg text-sm px-5 py-2.5 transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Confirm & Pay
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
