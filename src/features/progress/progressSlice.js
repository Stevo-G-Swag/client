import { createSlice } from '@reduxjs/toolkit';

export const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    stepsCompleted: 0,
    badges: [],
  },
  reducers: {
    incrementStep: state => {
      state.stepsCompleted += 1;
      console.log(`Step incremented, total steps: ${state.stepsCompleted}`);
    },
    addBadge: (state, action) => {
      state.badges.push(action.payload);
      console.log(`Badge added: ${action.payload}`);
    },
  },
});

export const { incrementStep, addBadge } = progressSlice.actions;

export default progressSlice.reducer;