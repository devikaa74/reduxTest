// src/redux/slices/recipeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    const response = await axios.get('https://dummyjson.com/recipes');
    return response.data.recipes;
});

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        allRecipes: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.allRecipes = action.payload;
                state.loading = false;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default recipeSlice.reducer;