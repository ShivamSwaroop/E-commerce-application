import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // {id, title, price, qty, thumbnail}
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        existing.qty = Math.min(existing.qty + 1, 99);
      } else {
        state.items.push({ ...product, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    changeQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && qty >= 1) item.qty = qty;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, changeQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;