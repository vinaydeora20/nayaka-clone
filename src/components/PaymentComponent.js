
import React, { useState } from 'react';

const PaymentComponent = ({ totalAmount , orderDetails }) => {
  console.log('orderDetails', orderDetails)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
console.log('totalAmount', totalAmount)
  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
  };


  const handlePlaceOrder = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method first!");
      return;
    }
  
    const upiId = '7610313114@ybl'; // Make sure this is correct and valid
    const name = encodeURIComponent('nykaa private limited');
      const amount = totalAmount;
      const transactionNote = encodeURIComponent('Payment for Order');
  
    // Generic UPI URI
    const upiUri = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=${transactionNote}`;
  
    let appUri = '';
  
    if (selectedPaymentMethod === 'PhonePe') {
      appUri = `phonepe://upi/pay?${upiUri.split('upi://pay?')[1]}`;
    } else if (selectedPaymentMethod === 'GooglePay') {
      appUri = `tez://upi/pay?${upiUri.split('upi://pay?')[1]}`;
    }
  
    // Try opening app directly
    window.location.href = appUri;
  
    // Fallback after 3 seconds
    setTimeout(() => {
      const fallback = document.getElementById('fallback');
      if (fallback) fallback.style.display = 'block';
    }, 3000);
  };
  console.log("orderDetails.items[0].info.price", orderDetails.items[0].info.price)
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Payment Options */}
      <div className="flex flex-col space-y-4 mb-6">
        {/* PhonePe Option */}
        <div
          className={`payment-tab flex items-center justify-start py-3 rounded-lg cursor-pointer transition-all duration-300 p-[10px]
          ${selectedPaymentMethod === 'PhonePe' ? 'bg-white border-2 border-blue-500 text-blue-500' : 'bg-white border-2 border-gray-300 text-gray-700'}
          hover:bg-gray-50`}
          style={{ padding: '10px', gap: "10px" }}
          onClick={() => handlePaymentSelection('PhonePe')}
        >
          <img
            src="https://pbs.twimg.com/profile_images/1615271089705463811/v-emhrqu_400x400.png"
            alt="PhonePe"
            className="w-8 h-8 mr-3"
          />
          <span>PhonePe</span>
        </div>

        {/* Google Pay Option */}
        <div
          className={`payment-tab flex items-center justify-start py-3 rounded-lg cursor-pointer transition-all duration-300
          ${selectedPaymentMethod === 'GooglePay' ? 'bg-white border-2 border-blue-500 text-blue-500' : 'bg-white border-2 border-gray-300 text-gray-700'}
          hover:bg-gray-50`}
          style={{ padding: '10px', gap: "10px" }}
          onClick={() => handlePaymentSelection('GooglePay')}
        >
          <img
            src="https://images.seeklogo.com/logo-png/39/1/google-pay-logo-png_seeklogo-393962.png"
            alt="GooglePay"
            className="w-8 h-8 mr-3"
          />
          <span>Google Pay</span>
        </div>
      </div>

      {/* Order Summary */}
      <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 ">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">Price {orderDetails.items[0].length} item</dt>
            <dd className="text-base font-medium text-gray-900">{totalAmount}</dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">Delivery Charges</dt>
            <dd className="text-base font-medium text-green-500">FREE</dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">Amount Payable</dt>
            <dd className="text-base font-medium text-gray-900">{totalAmount}</dd>
          </dl>
        </div>
      </div>

      {/* Safe Payment Strip */}
      <div className="flex items-center justify-center bg-gray-800 py-4 rounded-lg" style={{ background: "rgb(241, 243, 246)", marginTop: "10px" }}>
        <img
          src="https://rukminim1.flixcart.com/www/60/70/promos/13/02/2019/9b179a8a-a0e2-497b-bd44-20aa733dc0ec.png?q=90"
          loading="lazy"
          alt=""
          style={{ height: "40px", margin: "10px" }}
        />
        <div dir="auto" className="text-gray-500 tracking-normal w-[230.822px]" style={{ fontSize: "14px" }}>
          Safe and secure payments. Easy returns. 100% Authentic products.
        </div>
      </div>

      {/* Order Button */}
      <button
        style={{ marginTop: '10px' }}
        type="button"
        onClick={handlePlaceOrder}
        className="w-full bg-[#ff3e6c] text-white font-semibold text-sm px-5 py-2.5 transition duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300"
      >
        Order Now
      </button>

      {/* Fallback Message */}
      <div id="fallback" style={{ display: 'none', marginTop: '10px', color: 'red', textAlign: 'center' }}>
        If your UPI app didn't open, please check if it's installed.
      </div>
    </div>
  );
};

export default PaymentComponent;
