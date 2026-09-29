import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import wishlistReducer from "./wishlist";
import productReducer from "./product";
import userReducer from "./user";
import ordersReducer from "./orders";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    product: productReducer,
    user: userReducer,
    orders: ordersReducer,
  },
});
