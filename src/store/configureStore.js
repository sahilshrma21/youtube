import { configureStore } from '@reduxjs/toolkit';
import youtubeReducer from '../youtube/youtubeSlice';
export const store = configureStore({
    reducer: {
        youtubeApp:youtubeReducer,
    },
})