import { configureStore } from "@reduxjs/toolkit";
import sideToggle from "./sideToggle";
import cacheSlice from "./cacheSlice";
import chatSlice from "./chatSlice";

const Store = configureStore({
  reducer: {
    toggle: sideToggle,
    Cache: cacheSlice,
    chat: chatSlice,
  },
});
export default Store;
