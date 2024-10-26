// src/redux/reduxStore.js
import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './slices/recipeSlice';
import searchReducer from './slices/searchSlice';

const store = configureStore({
    reducer: {
        recipes: recipeReducer,
        search: searchReducer,
    },
});

export default store;