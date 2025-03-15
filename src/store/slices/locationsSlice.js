import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    locations: [],
    loading: false,
    error: null,
};

const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        fetchLocationsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchLocationsSuccess: (state, action) => {
            state.locations = action.payload;
            state.loading = false;
        },
        fetchLocationsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addLocation: (state, action) => {
            state.locations.push(action.payload);
        },
    },
});

export const { fetchLocationsStart, fetchLocationsSuccess, fetchLocationsFailure, addLocation } = locationsSlice.actions;
export default locationsSlice.reducer;