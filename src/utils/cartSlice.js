


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // Add item to the cart
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.info.id !== action.payload); // Remove item from the cart
    },
    clearCart: (state) => {
      state.items = []; // Clear the cart
    },
    buyProduct: (state, action) => {
      state.buyProduct = action.payload; // Set the product for direct buy
    },
  },
});

export const { addItem, removeItem, clearCart , buyProduct} = cartSlice.actions;
export default cartSlice.reducer;
