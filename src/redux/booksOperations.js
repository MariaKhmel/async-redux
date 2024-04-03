import * as booksActions from './booksactions'
import * as bookShelfAPI from '../bookShelf-api'
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchBooks = () => async dispatch => {
//     dispatch(booksActions.fetchBooksRequest());

//     try {
//         const books = await bookShelfAPI.fetchBooks();
//         dispatch(booksActions.fetchBooksSuccess(books))
//     } catch (error) {
//         dispatch(booksActions.fetchBooksError(error))
//     }

// }

export const fetchAllBooks = createAsyncThunk('books/fetchAllBooks',
    async () => {
        const books = await bookShelfAPI.fetchBooks();
        return books;
    })


export const fetchBooks = createAsyncThunk('books/fetchAllBooks',
    async (_, { rejectWithValue }) => {
        try {
            const books = await bookShelfAPI.fetchBooks();
            return books;
        } catch (error) {
            return rejectWithValue(error)
        }
    }


))

