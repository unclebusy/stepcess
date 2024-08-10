import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentAnswers: null,
  correctAnswer: null,
  selectAnswer: null,
  usersAnswers: [],
};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setCurrentAnswers(state, actions) {
      state.currentAnswers = actions.payload;
    },
    setCorrectAnswer(state, actions) {
      state.correctAnswer = actions.payload;
    },
    setUsersAnswers(state, actions) {
      state.usersAnswers.push(actions.payload);
    },
  },
});

export const { setCurrentAnswers, setUsersAnswers, setCorrectAnswer } = answersSlice.actions;
export default answersSlice.reducer;
