import { configureStore } from '@reduxjs/toolkit';
import bookingSlice from './bookingSlice';

const store = configureStore({
  reducer: {
    bookings: bookingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;