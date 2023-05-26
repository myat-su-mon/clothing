import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cart = Cookies.get("cart");

const initialState = {
  slider : [
  "https://images.pexels.com/photos/9197291/pexels-photo-9197291.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3752128/pexels-photo-3752128.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=800",
],
newArrivals : [
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1315&q=80",
  "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
],
products: [
],
categories : [
  "men", "women"
], 
cart: cart ? [...JSON.parse(cart)] : []
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      Cookies.set(
        "cart",
        JSON.stringify([...state.cart, { ...payload, qty: 1 }]),
        { expires: 7 }
      );
      state.cart = JSON.parse(Cookies.get("cart"));
    },
    removeFromCart: (state, {payload}) => {
      Cookies.set("cart", 
      JSON.stringify(state.cart.filter( (item) => item.id !== payload)), {expires: 7})
    },
    emptyCart: (state) => {
      Cookies.remove("cart");
      state.cart = [];
    }
  },
});

export const { increment } = productSlice.actions;

export default productSlice.reducer;
