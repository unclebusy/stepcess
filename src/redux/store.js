import { configureStore } from '@reduxjs/toolkit';
import answersSlice from './slices/answersSlice';
import testTypeSlice from './slices/testTypeSlice';
import questionsSlice from './slices/questionsSlice';

const store = configureStore({
  reducer: {
    testType: testTypeSlice,
    questions: questionsSlice,
    answers: answersSlice,
  },
});

export default store;
