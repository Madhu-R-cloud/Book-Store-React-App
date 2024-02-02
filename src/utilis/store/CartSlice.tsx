    import { createSlice } from "@reduxjs/toolkit";

    const cartSlice = createSlice({
        name:"cart",
        initialState:{
            cartItems: [],
        },
        reducers:{
            addItemToCart:(state:any,action) =>{
                state.cartItems.push(action.payload);
                console.log(action.payload);
                
            },
            updateItemQuantity: (state:any,action) => {
                
               
                state.cartItems = state.cartItems.map((cartBook:any)=>{
                if(cartBook._id===action.payload.itemId){
                    console.log(state.cartBook);
                    return {...cartBook, quantityToBuy:action.payload.updatedQuantity}
                }
                    return cartBook
                })
                
            },

            deleteCartItem: (state,action) => {
                state.cartItems=state.cartItems.filter((book:any)=>book._id!==action.payload)
            },
            putCartList: (state,action) => {
                state.cartItems=action.payload
            },
        }
    }) 



    export const{ addItemToCart, updateItemQuantity, deleteCartItem,putCartList } = cartSlice.actions;
    export default cartSlice.reducer;

