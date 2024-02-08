import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import BookSlice from "./BookSlice"
import LoadSlice from "./LoadSlice";
import wishListSlice from "./wishListSlice";
import reviewSlice from "./ReviewSlice";

const appStore = configureStore({
    reducer : {
        cart:CartSlice,
        books:BookSlice,
        pageload:LoadSlice,
        wish: wishListSlice,
        review:reviewSlice,
    }
})

export default appStore;