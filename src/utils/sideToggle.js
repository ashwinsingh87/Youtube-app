import { createSlice } from "@reduxjs/toolkit";
const sideToggle = createSlice({
    name:"toggle",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleIt:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        showMenu:(state)=>{
            state.isMenuOpen=true;
        }
    }
})  

export const {toggleIt, closeMenu,showMenu} = sideToggle.actions;
export default sideToggle.reducer;