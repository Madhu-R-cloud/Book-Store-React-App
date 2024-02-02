import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import BookSlice from "./BookSlice"
import LoadSlice from "./LoadSlice";
import wishListSlice from "./wishListSlice";

const appStore = configureStore({
    reducer : {
        cart:CartSlice,
        books:BookSlice,
        pageload:LoadSlice,
        wish: wishListSlice,
    }
})

export default appStore;