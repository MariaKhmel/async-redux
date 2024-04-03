import { createReducer, combineReducers, createSlice } from "@reduxjs/toolkit";
import * as booksActions from './booksactions'
import { fetchAllBooks } from "./booksOperations";
import { build } from "vite";


// const entities = createReducer([], builder => {
//     builder.addCase(fetchAllBooks.fulfilled,
//         (_, action) => action.payload)
//         .addCase(booksActions.fetchBooksSuccess, () => false)
//         .addCase(booksActions.fetchBooksError, () => false)
// })

// const isLoading = createReducer(false, builder => {
//     builder.addCase(booksActions.fetchBooksRequest, () => true)
//         .addCase(booksActions.fetchBooksSuccess, () => false)
//         .addCase(booksActions.fetchBooksError, () => false)
// })

// const error = createReducer(null, builder => {
//     builder.addCase(booksActions.fetchBooksError, (_, action) => action.payload)
//         .addCase(booksActions.fetchBooksRequest, () => null)
// })

// export default combineReducers({
//     entities, isLoading, error
// })

const entities = createReducer([], builder => {
    builder.addCase(fetchAllBooks.fulfilled,
        (_, action) => action.payload)
})

const isLoading = createReducer(false, builder => {
    builder.addCase(fetchAllBooks.pending, () => true)
        .addCase(fetchAllBooks.fulfilled, () => false)
        .addCase(fetchAllBooks.rejected, () => false)
})

const error = createReducer(null, builder => {
    builder.addCase(fetchAllBooks.rejected, (_, action) => action.payload)
        .addCase(fetchAllBooks.pending, () => null)
})

const initialState = { value: 0 };
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },

        decrement(state) {
            state.value--
        },

        incrementByAmount(state, action) {
            state.value += action.payload;
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
