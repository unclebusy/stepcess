import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentAnswers: null,
};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setCurrentAnswers(state, actions) {
      state.currentAnswers = actions.payload;
    },
  },
});

export const { setCurrentAnswers } = answersSlice.actions;
export default answersSlice.reducer;
