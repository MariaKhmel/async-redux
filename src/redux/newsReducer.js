import { createSlice } from "@reduxjs/toolkit";


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

const initialState = {
    news: [],
    isLoading: false,
    error: ''
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        fetching: (state) => {
            state.isLoading = true;
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false;
            state.news = action.payload;
        },
        fetchError: (state, action) => {
            state.error = action.payload;
        }
    }
})


export const newsReducer = newsSlice.reducer;