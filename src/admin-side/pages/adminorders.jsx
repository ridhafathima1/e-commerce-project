import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
export const fetchorders=createAsyncThunk(
    "adminorders/fetchorders",
    async ()=>{
        const res=await axios.get("http://localhost:3000/orders")
        return res.data;
    }
)
const adminordersslice=createSlice({
    name:"adminorders",
    initialState:{
        orders:[],
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchorders.fulfilled,(state,action)=>{
            state.orders=action.payload;
        })
    }
})
export default adminordersslice.reducer