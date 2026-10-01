import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import wishlistReducer from "./wishlist";
import productReducer from "./product";
import userReducer from "./user";
import ordersReducer from "./orders";
import adminproductReducer from "./adminproducts";
import adminusersReducer from "./adminusers";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    product: productReducer,
    user: userReducer,
    orders: ordersReducer,
    adminproducts:adminproductReducer,
    adminusers:adminusersReducer,
  },
});

