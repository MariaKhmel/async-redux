import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from "../pokemon";
import { todoApi } from "../todosSlice";
import { productReducer } from "../products/slice";
import { productsApi } from "../products/productsApi";
// import { newsReducer } from "./newsReducer";
const reducer = combineReducers({
    // books: booksReducer,
    // [pokemonApi.reducerPath]: pokemonApi.reducer,
    // [todoApi.reducerPath]: todoApi.reducer,
    // products: productReducer,
    // [productsApi.reducerPath]: productsApi.reducer
    products: productReducer

})
export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
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
