import { createSlice } from '@reduxjs/toolkit';

export interface CartType {
  count: number;
}
const initialState: CartType = {
  count: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setCartCount } = cartSlice.actions;

export default cartSlice.reducer;
