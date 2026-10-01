import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import { useReducer } from "react";
export const fetchusers=createAsyncThunk("adminusers/fetchusers",async()=>{
    const res=await axios.get("http://localhost:3000/users")
    return res.data;
})
export const blockusers=createAsyncThunk("adminusers/blockuser",async (id)=>{
    const res=await axios.patch(`http://localhost:3000/users/${id}`,{blocked:true});
    return res.data
})
const adminusersslice=createSlice({
    name:"adminusers",
    initialState:{
        users:[],
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchusers.fulfilled,(state,action)=>{
            state.users=action.payload;
        })
        builder.addCase(blockusers.fulfilled,(state,action)=>{
            const index=state.users.findIndex((user)=>useReducer.id===action.payload.id)
            if(index!==-1){
                state.users[index]=action.payload;
            }
        })
    },
})
export default adminusersslice.reducer;