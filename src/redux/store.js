import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksReducer";
export const store = configureStore({
    reducer: {
        books: booksReducer,
    }
})


const addTodo = text => {

    return {
        type: 'addtodo',
        payload: fetch('/todos')
    }
}

const addAsyncTodo = text => (dispatch) => {
    const todo = fetch('/todos');
    dispatch(addTodo(todo))
}
