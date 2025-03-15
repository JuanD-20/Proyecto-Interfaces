import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: [],
    loading: false,
    error: null,
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        fetchFavoritesStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchFavoritesSuccess: (state, action) => {
            state.favorites = action.payload;
            state.loading = false;
        },
        fetchFavoritesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(fav => fav.id !== action.payload);
        },
    },
});

export const { fetchFavoritesStart, fetchFavoritesSuccess, fetchFavoritesFailure, addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;