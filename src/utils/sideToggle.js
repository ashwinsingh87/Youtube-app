import { createSlice } from "@reduxjs/toolkit";
const sideToggle = createSlice({
    name:"toggle",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleIt:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        }
    }
})  

export const {toggleIt} = sideToggle.actions;
export default sideToggle.reducer;