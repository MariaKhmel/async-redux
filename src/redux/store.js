import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from "../pokemon";
import { todoApi } from "../todosSlice";
import { productsSlice } from "../products/slice";
// import { newsReducer } from "./newsReducer";

export const store = configureStore({
    reducer: {
        // books: booksReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [todoApi.reducerPath]: todoApi.reducer,
        // news: newsReducer
        productsSlice: productsSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware),
})


setupListeners(store.dispatch)



















// const addTodo = text => {

//     return {
//         type: 'addtodo',
//         payload: fetch('/todos')
//     }
// }

// const addAsyncTodo = text => (dispatch) => {
//     const todo = fetch('/todos');
//     dispatch(addTodo(todo))
// }
