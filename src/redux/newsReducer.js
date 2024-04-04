import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNews } from "../api,js";


export const getnewsThunk = () => {
    return async (dispatch) => {
        try {
            dispatch(newsSlice.actions.fetching())
            const data = await fetch();
            dispatch(newsSlice.actions.fetchSuccess(data))
        } catch {
            dispatch(newsSlice.actions.fetchError())
        }

        return;
    }

}

export const getNewsThunk = createAsyncThunk('news/getTopNews', async () => {
    return await getNews();
})

const initialState = {
    news: [],
    isLoading: false,
    error: ''
}

// const newsSlice = createSlice({
//     name: 'news',
//     initialState,
//     reducers: {
//         fetching: (state) => {
//             state.isLoading = true;
//         },
//         fetchSuccess: (state, action) => {
//             state.isLoading = false;
//             state.news = action.payload;
//         },
//         fetchError: (state, action) => {
//             state.error = action.payload;
//         }
//     }
// })

const newsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: builder => {
        builder.addCase(getNewsThunk.pending, (state) => {
            state.isLoading = true;
        },
            builder.addCase()(getNewsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.news = action.payload;
            }),
            builder.addCase()(getNewsThunk.rejected, (state, action) => {
                state.error = action.payload;
            }),

        )
    }
})


export const newsReducer = newsSlice.reducer;