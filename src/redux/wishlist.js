import {createSlice} from "@reduxjs/toolkit"
const wishlistslice=createSlice({
    name:"wishlist",
    initialState:{
        items:[],
    },
    reducers:{
        togglewishlist:(state,action)=>{
            const exists=state.items.find((item)=>item.id===action.payload.id)
            if(!exists){
                state.items=state.items.filter((item)=>item.id!==action.payload.id)
            }else{
                state.items.push(action.payload)
            }
        },
    },
})
export const{togglewishlist}=wishlistslice.actions
export default wishlistslice.reducer;