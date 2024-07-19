import { configureStore } from "@reduxjs/toolkit";
import filter from "./slise/filterslise";
import search from "./slise/searchslise";
import cart from "./slise/cartslice";
import count from "./slise/counterSlice";

export const store = configureStore({
    reducer: {
        filter,
        search,
        cart,
        count,
    }
});