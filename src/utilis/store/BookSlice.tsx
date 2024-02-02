import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name:"cart",
    initialState:{
        bookItems:[],
    },
    reducers:{
        addItemsToBook:(state:any,action) =>{
           state.bookItems = (action.payload);
        },
    
    }
})

export const{ addItemsToBook } = bookSlice.actions;
export default bookSlice.reducer;