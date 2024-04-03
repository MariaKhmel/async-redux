import { configureStore } from "@reduxjs/toolkit";
// import booksReducer from "./booksReducer";
import { pokemonApi } from "../pokemon";
export const store = configureStore({
    reducer: {
        // books: booksReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})





















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
