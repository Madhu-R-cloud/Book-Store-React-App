import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name:"book",
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