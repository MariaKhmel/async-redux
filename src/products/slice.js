import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./thunk";

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase()
    }
})