import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Books:50
}
const BookSlice=createSlice({
    name:"book",
    initialState,
    reducers:{
        buyBook:(state,action)=>{
            state.Books=state.Books-1
        },
        removeBook:(state,action)=>{
            state.Books=0
        }
    }
})

export default BookSlice.reducer

export const {buyBook,removeBook}=BookSlice.actions