import React, { useEffect, useState } from "react";

const LimitedTimeOffer = () => {
  // Random time between 600 (10 min) and 1500 (25 min) seconds
  const getRandomTime = () => Math.floor(Math.random() * (1500 - 600 + 1)) + 600;

  const [timeLeft, setTimeLeft] = useState(getRandomTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="bg-red-50 border border-red-200 p-4 rounded-lg shadow-sm text-center max-w-xl mx-auto ">
      {timeLeft > 0 ? (
        <>
          <h2 className="text-lg font-semibold text-red-700 mb-1">
            Limited Time Offer!
          </h2>
          <p className="text-base text-gray-800">
            Buy this product within{" "}
            <span className="font-bold text-red-600" style={{color:"red"}}>{formatTime(timeLeft)}</span> minutes to get{" "}
            <span className="font-bold text-green-600">90% OFF</span>!
          </p>
        </>
      ) : (
        <p className="text-base text-gray-500">Sorry, this limited-time offer has expired.</p>
      )}
    </div>
  );
};

export default LimitedTimeOffer;
