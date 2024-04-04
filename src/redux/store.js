import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from "../pokemon";
import { todoApi } from "../todosSlice";

export const store = configureStore({
    reducer: {
        // books: booksReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [todoApi.reducerPath]: todoApi.reducer,
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
