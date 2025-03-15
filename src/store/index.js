import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import locationsReducer from './slices/locationsSlice';
import ridesReducer from './slices/ridesSlice';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        locations: locationsReducer,
        rides: ridesReducer,
        favorites: favoritesReducer,
    },
});