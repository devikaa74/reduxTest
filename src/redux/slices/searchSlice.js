// src/redux/slices/searchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        cuisine: '',
    },
    reducers: {
        setCuisine: (state, action) => {
            state.cuisine = action.payload;
        },
    },
});

export const { setCuisine } = searchSlice.actions;
export default searchSlice.reducer;