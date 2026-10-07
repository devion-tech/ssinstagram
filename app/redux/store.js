import { configureStore } from '@reduxjs/toolkit';
import downloaderReducer from './downloaderSlice';

export const store = configureStore({
  reducer: {
    downloader: downloaderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
