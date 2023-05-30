import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cart = Cookies.get("cart");

const initialState = {
  cart: cart ? [...JSON.parse(cart)] : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.cart.find((item) => item.id === payload.id);

      if (item) {
        if (item.size != payload.size) {
          item.size = [...item.size, payload.size];
        }
        item.qty += payload.qty;
      } else {
        state.cart.push(payload);
      }
      // Cookies.set("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id != payload);
      // Cookies.set("cart", JSON.stringify(state.cart));
    },
    resetCart: (state) => {
      state.cart = [];
      // Cookies.remove("cart");
    },
    increaseQty: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        if (item.id === payload) {
          item.qty += 1;
        }
        return item;
      });
    },
    decreaseQty: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        if (item.id === payload && item.qty > 1) {
          item.qty -= 1;
        }
        return item;
      });
    },
  },
});

export const { addToCart, removeFromCart, resetCart, increaseQty, decreaseQty } = cartSlice.actions;

export default cartSlice.reducer;
