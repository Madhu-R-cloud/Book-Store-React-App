import { createSlice } from "@reduxjs/toolkit";

const LoadSlice = createSlice({
    name:"load",
    initialState:{
        pageLoads: true,
    },
    reducers:{
        setLoaded:(state:any,action) =>{  
            state.pageLoads = (action.payload);
        },
    }
})

export const{ setLoaded } = LoadSlice.actions;
export default LoadSlice.reducer;