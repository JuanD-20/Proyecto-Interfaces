import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rides: [],
    loading: false,
    error: null,
};

const ridesSlice = createSlice({
    name: 'rides',
    initialState,
    reducers: {
        fetchRidesStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchRidesSuccess: (state, action) => {
            state.rides = action.payload;
            state.loading = false;
        },
        fetchRidesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addRide: (state, action) => {
            state.rides.push(action.payload);
        },
        updateRide: (state, action) => {
            const index = state.rides.findIndex(ride => ride.id === action.payload.id);
            if (index !== -1) {
                state.rides[index] = action.payload;
            }
        },
        deleteRide: (state, action) => {
            state.rides = state.rides.filter(ride => ride.id !== action.payload);
        },
    },
});

export const { fetchRidesStart, fetchRidesSuccess, fetchRidesFailure, addRide, updateRide, deleteRide } = ridesSlice.actions;
export default ridesSlice.reducer;