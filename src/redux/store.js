import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
