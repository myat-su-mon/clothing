import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./ProductSlice";
import { productsApi } from "./productsApi";
import cartReducer from "./cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // products: productSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
