import { createAsyncThunk } from "@reduxjs/toolkit";
import axios
    from "axios";
axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';
export const fetchTasks = createAsyncThunk('tasks/fetchAll',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('/pokemon')
            return res.data.results;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    })