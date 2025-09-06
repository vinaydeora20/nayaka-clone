// // import React, { useEffect, useState } from "react";

// // const CountdownTimer = () => {
// //   const getRandomTime = () => {
// //     const min = 10; // in minutes
// //     const max = 30;
// //     return Math.floor(Math.random() * (max - min + 1) + min) * 60; // seconds
// //   };

// //   const [timeLeft, setTimeLeft] = useState(getRandomTime());

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setTimeLeft((prevTime) => {
// //         if (prevTime <= 1) {
// //           clearInterval(timer);
// //           return 0;
// //         }
// //         return prevTime - 1;
// //       });
// //     }, 1000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   const formatTime = (seconds) => {
// //     const mins = Math.floor(seconds / 60);
// //     const secs = seconds % 60;
// //     return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
// //   };

// //   return (
// //     <div className="w-full bg-yellow-100 p-4 rounded-lg mb-6">
// //       <div className="flex flex-col sm:flex-row justify-between items-center">
// //         <span className="text-lg font-semibold text-yellow-800">
// //           🛍️ Sale is Live Now
// //         </span>
// //         <span className="text-lg font-mono font-bold text-red-600 mt-2 sm:mt-0">
// //           Ends in: {formatTime(timeLeft)}
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CountdownTimer;
// import React, { useEffect, useState } from "react";

// const CountdownTimer = () => {
//   const getRandomTime = () => {
//     const min = 10; // in minutes
//     const max = 30;
//     return Math.floor(Math.random() * (max - min + 1) + min) * 60; // seconds
//   };

//   const [timeLeft, setTimeLeft] = useState(getRandomTime());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 1) {
//           clearInterval(timer);
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
//   };

//   return (
//     <div className="w-full bg-blue-500  from-yellow-300 via-red-400 to-pink-400 p-6  border-red-500">
//       <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
//         <div className="flex items-center gap-3">
//           <span className="text-3xl sm:text-4xl font-extrabold text-white animate-bounce">
//             🛍️
//           </span>
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider drop-shadow-lg">
//             Mega Sale Live!
//           </h2>
//           <span className="ml-2 px-3 py-1 bg-white text-red-600 text-sm font-bold rounded-full uppercase">
//             Limited Time
//           </span>
//         </div>

//         <div className="mt-4 sm:mt-0 bg-white text-red-600 px-4 py-2 rounded-md text-xl sm:text-2xl font-mono font-bold shadow-inner border border-red-300">
//           Ends in: {formatTime(timeLeft)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;
import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const getRandomTime = () => {
    const min = 10; // in minutes
    const max = 30;
    return Math.floor(Math.random() * (max - min + 1) + min) * 60; // seconds
  };

  const [timeLeft, setTimeLeft] = useState(getRandomTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
     <>
      <p className="  bg-white text-gray-500 text-md font-mono text-center ">
        Sale ends in:{" "}
        <span style={{ color: "red" }}>{formatTime(timeLeft)}</span>
      </p>
    </>
  );
};

export default CountdownTimer;
