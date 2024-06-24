import { configureStore } from '@reduxjs/toolkit';
import progressReducer from '../features/progress/progressSlice';

export const store = configureStore({
  reducer: {
    progress: progressReducer,
  },
});