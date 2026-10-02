import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
export const deleteproduct=createAsyncThunk("adminproducts/deleteproduct",async(id)=>{
    await axios.delete(`http://localhost:3000/products/${id}`);
    return id;
})
export const addproduct=createAsyncThunk("adminproducts/addproduct",
    async(product)=>{
        const res=await axios.post("http://localhost:3000/products",product)
        return res.data;
    }
)
export const updateproduct=createAsyncThunk("adminproducts/updateproduct",async({id,product})=>{
const res=await axios.patch(`http://localhost:3000/products/${id}`,
    product
)
return res.data
})
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
        builder.addCase(addproduct.fulfilled,(state,action)=>{
            state.products.push(action.payload)
        })
        builder.addCase(updateproduct.fulfilled,(state,action)=>{
            const index=state.products.findIndex((product)=>product.id===action.payload.id)
            if(index!==-1){
                state.products[index]=action.payload;
            }
        })
        builder.addCase(deleteproduct.fulfilled,(state,action)=>{
            state.products=state.products.filter((product)=>product.id!==action.payload)
        })
    },
})
export default adminproductslice.reducer;
