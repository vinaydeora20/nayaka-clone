
import { useEffect } from "react";
import { QRCodeSVG } from "qrcode.react"; // Correct import for QRCodeSVG

const QRPayment = ({ orderDetails, totalAmount, onBack }) => {
  // Using your provided UPI ID
  const upiId = "6367609049@ybl";
  const merchantName = "flipcart Private limited"; // Change this to your store name
  const transactionNote = `Order #${Date.now()}`;
  
  // Static amount for payment (500 INR in this case)
  const formattedAmount = totalAmount;

  // Create UPI payment link with proper encoding
  const paymentLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${formattedAmount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;

  useEffect(() => {
    console.log("Payment details:", {
      upiId,
      amount: formattedAmount,
      paymentLink
    });
  }, [formattedAmount, paymentLink]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-6">Complete Your Payment</h3>
      
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-lg font-semibold mb-2">Total Amount</p>
        <p className="text-3xl font-bold text-green-600 mb-6">₹{formattedAmount}</p>
        
        <div className="flex justify-center mb-6">
          {/* Generate QR Code with static amount */}
          <QRCodeSVG value={paymentLink} size={300} />
        </div>
        
        <div className="bg-white p-4 rounded border border-gray-200">
          <p className="text-sm font-medium mb-1">UPI ID:</p>
          <p className="font-mono text-lg bg-gray-100 p-2 rounded">{upiId}</p>
          <p className="text-xs text-gray-500 mt-2">Scan QR or send money directly to this UPI ID</p>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => {
            // This would open UPI apps directly in a real implementation
            window.location.href = paymentLink;
          }}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 font-medium"
        >
          Open Payment App
        </button>
        
        <button
          onClick={() => {
            // In a real app, you would verify payment here
            alert("Payment successful! Order confirmed.");
          }}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
        >
          I've Already Paid
        </button>
        
        <button
          onClick={onBack}
          className="w-full bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          Back to Order Summary
        </button>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-sm">
        <p className="font-medium text-yellow-800">Important:</p>
        <ul className="list-disc list-inside text-yellow-700 space-y-1 mt-2">
          <li>Please pay the exact amount of ₹{formattedAmount}</li>
          <li>After payment, click "I've Already Paid"</li>
          <li>Orders will be processed only after payment verification</li>
        </ul>
      </div>
    </div>
  );
};

export default QRPayment;
