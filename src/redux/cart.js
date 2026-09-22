import { createSlice } from "@reduxjs/toolkit"
const cartslice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addtocart:(state,action)=>{
            const exists=state.items.find((items)=>items.id===action.payload.id)
        
        if(!exists){
            state.items.push(action.payload);
        }
    },
    removefromcart:(state,action)=>{
        state.items=state.items.filter((item)=>item.id!==action.payload)
    },
    },
})
export const { addtocart,removefromcart }=cartslice.actions;
export default cartslice.reducer;

