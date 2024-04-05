import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { createProductsThunk, deleteProductsThunk, getProductsThunk, initialState } from "./thunk";

const arrThunks = [createProductsThunk, deleteProductsThunk, getProductsThunk];

const fn = (type) => arrThunks.map(el => el[type])

const handlePending = (state) => {
    state.isLoading = true;
}

const handleFulfilled = (state) => {
    state.isLoading = false;
    state.error = '';
}

const handleFulfilledGet = (state, { payload }) => {
    state.products.push(payload);
}

const handleFulfilledCreate = (state, { payload }) => {
    state.products = state.products.filter(product => product.id !== payload.id)
}

const handleFulfilledDel = (state, { payload }) => {
    state.products = payload;
}

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
}


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            // .addCase(getProductsThunk.pending, handlePending)
            .addCase(getProductsThunk.fulfilled, handleFulfilledGet)
            // .addCase(getProductsThunk.rejected, handleRejected)
            // .addCase(createProductsThunk.pending, handlePending)
            .addCase(createProductsThunk.fulfilled, handleFulfilledCreate)
            // .addCase(createProductsThunk.rejected, handleRejected)
            // .addCase(deleteProductsThunk.pending, handlePending)
            .addCase(deleteProductsThunk.fulfilled, handleFulfilledDel)
            // .addCase(deleteProductsThunk.rejected, handleRejected)
            .addMatcher(isAnyOf(...fn('pending')), handlePending)
            .addMatcher(isAnyOf(...fn('rejected')), handleRejected)
            .addMatcher(isAnyOf(...fn('fulfilled')), handleFulfilled)
    }
}) 