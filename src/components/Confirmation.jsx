
// import QRCode from "react-qr-code";
// import { useSelector } from "react-redux";

// const Confirmation = () => {
//   const cartItems = useSelector((store) => store.cart.items);
//   const totalPrice = cartItems.reduce((acc, item) => acc + (item.info.price || 0), 0) / 100;

//   const generateQRData = () => {
//     const paymentLink = `https://paymentgateway.com/checkout?amount=${totalPrice}`;
//     return paymentLink; // URL or data representing the payment URL
//   };

//   return (
//     <div className="container p-6">
//       <h2 className="text-3xl font-bold mb-6">Payment Confirmation</h2>
//       <p className="mb-4">Thank you for your order! Please complete your payment below.</p>
//       <div className="flex items-center justify-center mb-6">
//         <QRCode value={generateQRData()} size={256} />
//       </div>
//       <div className="mt-6 text-center">
//         <p>Total Amount: ₹{totalPrice}</p>
//         <p>Scan the QR code above to complete your payment.</p>
//       </div>
//     </div>
//   );
// };

// export default Confirmation;
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

const Confirmation = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // Debugging: Log cart items to check the price structure
  console.log(cartItems);

  // Calculate total price by summing the item prices and converting to rupees
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = item.info.price || 0; // Provide fallback if price is not available
    console.log(`Item Price: ₹${price / 100}`); // Log individual item price for debugging
    return acc + price;
  }, 0) / 100; // Convert cents to rupees

  // Format the total amount to two decimal places
  const formattedTotalPrice = totalPrice.toFixed(2);

  // Generate the payment URL or data for the QR Code
  const generateQRData = () => {
    const paymentLink = `https://paymentgateway.com/checkout?amount=${formattedTotalPrice}&currency=INR`;
    return encodeURIComponent(paymentLink); // URL encode the link for safety
  };

  return (
    <div className="container p-6">
      <h2 className="text-3xl font-bold mb-6">Payment Confirmation</h2>
      <p className="mb-4">Thank you for your order! Please complete your payment below.</p>
      
      {/* QR Code Section */}
      <div className="flex items-center justify-center mb-6">
        <QRCode value={generateQRData()} size={256} />
      </div>

      {/* Price Display Section */}
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold">
          Total Amount: ₹{formattedTotalPrice}
        </p>
        <p>Scan the QR code above to complete your payment.</p>
      </div>
    </div>
  );
};

export default Confirmation;
