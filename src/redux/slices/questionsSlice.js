import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allQuestions: [],
  currentQuestion: null,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setAllQuestions(state, action) {
      state.allQuestions = action.payload;
    },
    setCurrentQuestion(state, action) {
      state.currentQuestion = action.payload;
    },
  },
});

export const { setAllQuestions, setCurrentQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
