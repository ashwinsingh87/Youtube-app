import { configureStore } from "@reduxjs/toolkit";
import sideToggle from "./sideToggle";
import cacheSlice from "./cacheSlice";

const Store = configureStore({
    reducer:{
        toggle:sideToggle,
        Cache:cacheSlice,
    }
})
export default Store;