import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wish",
    initialState: {
        wishListItems: []
    },
    reducers: {
        putWishList: (state,action) => {
            state.wishListItems=action.payload
        },
        addWishListItem: (state:any,action) => {
            state.wishListItems.push(action.payload)
        },
        deleteWishItem: (state,action) => {
            // console.log(action.payload);
            
            state.wishListItems = state.wishListItems.filter((book:any)=>book._id!==action.payload)
        }
    }
})

export const {putWishList,addWishListItem,deleteWishItem} = wishListSlice.actions
export default wishListSlice.reducer