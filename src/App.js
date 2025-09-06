import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"; 
import store from "./utils/store";
import Cart from "./components/cart";
import ProductInfo from "./components/ProductInfo";
import Confirmation from "./components/Confirmation";
import Checkout from "./components/Checkout";
import DealInfo from "./components/DealInfo";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

// Updated product list (girls' items)
const items = [
  "Zara Bag",
  "Gucci Flora",
  "Perfume",
  "Foundation",
  "Highlighter",
  "Lipstick",
  "Face Palette",
  "Pressed Powder",
  "Face Powder",
  "Compact Foundation",
  "Eyeshadow",
  "Giorgio Armani"
];

// Updated girl-specific name syllables for Indian-style names
const nameStart = ["Aa", "Vi", "Pri", "Sha", "Si", "Ki", "Di", "Ne", "Ta", "Ru", "La", "An"];
const nameMiddle = ["na", "ya", "shi", "ta", "vi", "ni", "li", "ra", "ma", "sa"];
const nameEnd = ["a", "i", "ya", "na", "ta", "sha", "la", "thi", "mi", "ra"];

// Indian girl surnames (common family names)
const indianLastNames = [
  "Sharma", "Verma", "Patel", "Reddy", "Singh",
  "Yadav", "Mehta", "Agarwal", "Nair", "Deshmukh"
];

// Utility functions
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateIndianFirstName = () => {
  return `${getRandomItem(nameStart)}${getRandomItem(nameMiddle)}${getRandomItem(nameEnd)}`;
};

const generateIndianLastName = () => getRandomItem(indianLastNames);

const App = () => {

  // const generateRandomNotification = () => {
  //   const fullName = `${generateIndianFirstName()} ${generateIndianLastName()}`;
  //   const item = getRandomItem(items);
  //   toast(`${fullName} bought a ${item}`);
  // };

  // useEffect(() => {
  //   const interval = setInterval(generateRandomNotification, 20000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/home" element={<Body />} />
          <Route path="/product/:mobId" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/deals/:mobId" element={<DealInfo />} />
        </Routes>
        <ToastContainer position="bottom-center" autoClose={2000} />
      </Provider>
    </div>
  );
};

export default App;
