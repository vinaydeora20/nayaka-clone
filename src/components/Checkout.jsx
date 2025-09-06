
import { useState } from "react";
import QRPayment from "./QRPayment.js";
import CheckoutForm from "./CheckoutForm.js";
import OrderSummary from "./OrderSummary.js";
import PaymentComponent from "./PaymentComponent.js";
import { useSelector } from "react-redux";

const Checkout = ({ cartItems, isCheckout , onBackToCart  }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [orderDetails, setOrderDetails] = useState(null);
  console.log('isCheckout01', isCheckout)

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFormSubmit = (data) => {
    setFormData(data);
    nextStep();
  };

  const handleOrderConfirm = (details) => {
    setOrderDetails(details);
    nextStep();
  };

  const buyNowProduct = useSelector((store) => store.cart.buyProduct);
  const itemsToRender = isCheckout ? cartItems : [buyNowProduct];

  const calculateTotal = () => {
    const total = itemsToRender.reduce((total, item) => {
      const priceString = item.info.discountPrice.replace(/[^\d.]/g, '');
      const price = parseFloat(priceString) || 0;
      return total + price;
    }, 0);
    return total;
  };

  const steps = [
    { id: 1, label: "Checkout" },
    { id: 2, label: "Summary" },
    { id: 3, label: "Payment" },
    { id: 4, label: "Confirm" }, // Dummy step
  ];

  return (
    <div className="container p-6 max-w-4xl mx-auto">
      {/* <h2 className="text-2xl font-bold mb-6 text-center">Checkout Process</h2> */}

      {/* Stepper */}
      <ul className="relative flex justify-between items-center mb-10">
  {steps.map((s, idx) => (
    <li key={s.id} className="flex flex-col items-center flex-1">
      <div className="flex items-center w-full">
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all ml-6
            ${step === s.id
              ? "bg-[#ff3e6c] text-white"
              : step > s.id
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-gray-800"}
          `}
        >
          {s.id}
        </div>

        {/* Line between steps */}
        {idx !== steps.length - 1 && (
          <div className="flex-1 h-[1px] bg-gray-300 mx-2 mt-0.5"></div>
        )}
      </div>

      <div className="mt-3 text-center">
        <span className="text-sm font-medium text-gray-800">{s.label}</span>
      </div>
    </li>
  ))}
</ul>


      {/* End Stepper */}

      {/* Step Content */}
      {step === 1 && (
        <CheckoutForm
          onSubmit={handleFormSubmit}
          onBack={onBackToCart}
          initialValues={formData}
        />
      )}
      {step === 2 && (
        <OrderSummary
          cartItems={itemsToRender}
          formData={formData}
          onConfirm={handleOrderConfirm}
          onBack={prevStep}
          totalAmount={calculateTotal()}
        />
      )}
      {step === 3 && (
        <PaymentComponent
          orderDetails={orderDetails}
          totalAmount={calculateTotal()}
          onBack={prevStep}
        />
      )}
    </div>
  );
};

export default Checkout;
