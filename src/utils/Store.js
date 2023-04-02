import { configureStore } from "@reduxjs/toolkit";
import sideToggle from "./sideToggle";

const Store = configureStore({
    reducer:{
        toggle:sideToggle,
    }
})
export default Store;