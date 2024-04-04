import { createAsyncThunk } from "@reduxjs/toolkit"
import { createProducts, deleteProducts, getProducts } from "./productsApi"

export const initialState = {
    products: null,
    isLoading: false,
    error: ''
}

export const getProductsThunk = createAsyncThunk('products/get', () => getProducts())
export const createProductsThunk = createAsyncThunk('products/create', (data) => createProducts(data))
export const deleteProductsThunk = createAsyncThunk('products/delete', (id) => deleteProducts(id))
