import { createSlice } from "@reduxjs/toolkit";
const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    items: [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.items.push(action.payload);
    },
    setOrders: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const {
  addOrder,
  setOrders,
} = ordersSlice.actions;
export default ordersSlice.reducer;