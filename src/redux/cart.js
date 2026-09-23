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
    increasequantity:(state,action)=>{
        const item=state.items.find((item)=>item.id===action.payload)
        if(item){
            item.quantity+=1
        }
    },
    decreasequantity:(state,action)=>{
        const item=state.items.find((item)=>item.id===action.payload)
        if(item&&item.quantity>1){
            item.quantity-=1;
        }
    },
    },
});
export const { addtocart,removefromcart,increasequantity,decreasequantity }=cartslice.actions;
export default cartslice.reducer;

