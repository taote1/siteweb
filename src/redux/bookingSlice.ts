import { createSlice } from '@reduxjs/toolkit';

interface BookingState {
  bookings: { head: string,
    square: string,
    repair: string,
    price: number,
    district: string,
    id: number }[];
}

const initialState: BookingState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking(state, action) {
      state.bookings.push({ ...action.payload });
    },
    removeBooking(state, action) {
      state.bookings = state.bookings.filter((booking) => booking.id !== action.payload);
    },
  },
});

export const { addBooking, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
