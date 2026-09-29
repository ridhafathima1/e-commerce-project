import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async () => {
    const userId=localStorage.getItem("userId")
    if(!userId){
      return [];
    }
    const response = await axios.get(
      `http://localhost:3000/cart?userId=${userId}`
    );
    return response.data.map((item) => ({
      ...item,
      id: item.productId,
      quantity: item.quantity || 1,
    }));
  }
);
export const addCartToDB = createAsyncThunk(
  "cart/addCartToDB",
  async (product) => {  
    const response = await axios.post(
      "http://localhost:3000/cart",
      {
        userId: localStorage.getItem("userId"),
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        description: product.description,
        stock:product.stock,
        quantity: product.quantity || 1,
      }
    );
    return response.data;
  }
);
export const removeCartFromDB = createAsyncThunk(
  "cart/removeCartFromDB",
  async (productId) => {
    const userId=localStorage.getItem("userId")
    const response = await axios.get(
      `http://localhost:3000/cart?userId=${userId}`
    );
    const cartItem = response.data.find(
      (item) =>
        String(item.productId) === String(productId)
    );
    if (cartItem) {
      await axios.delete(
        `http://localhost:3000/cart/${cartItem.id}`
      );
    }
    return productId;
  }
);
const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addtocart: (state, action) => {
      const exists = state.items.find(
        (item) =>
          String(item.id) === String(action.payload.id)  );
      if (exists) {
        exists.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
    },
    removefromcart: (state, action) => {
      state.items = state.items.filter(
        (item) =>
          String(item.id) !== String(action.payload)
      );
    },
    increasequantity: (state, action) => {
      const item = state.items.find(
        (item) =>
          String(item.id) === String(action.payload)
      );
      if (item&&item.quantity<item.stock) {
        item.quantity += 1;
      }
    },
    decreasequantity: (state, action) => {
      const item = state.items.find(
        (item) =>
          String(item.id) === String(action.payload)
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearcart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
export const {
  addtocart,
  removefromcart,
  increasequantity,
  decreasequantity,
  clearcart,
} = cartslice.actions;
export default cartslice.reducer;