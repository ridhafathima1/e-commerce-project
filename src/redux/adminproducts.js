import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
export const fetchProducts=createAsyncThunk(
    "adminproducts/fetchProducts",
    async()=>{
        const res=await axios.get("http://localhost:3000/products");
        return res.data;
    }
)
const adminproductslice=createSlice({
    name:"adminproducts",
    initialState:{
        products:[],
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products=action.payload;
        })
    },
})
export default adminproductslice.reducer;
