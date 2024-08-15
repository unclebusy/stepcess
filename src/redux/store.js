import { configureStore } from '@reduxjs/toolkit';
import answersSlice from './slices/answersSlice';
import testTypeSlice from './slices/testTypeSlice';
import questionsSlice from './slices/questionsSlice';
import modalAnswerResultSlice from './slices/modalAnswerResultSlice';

const store = configureStore({
  reducer: {
    testType: testTypeSlice,
    questions: questionsSlice,
    answers: answersSlice,
    modalAnswerResult: modalAnswerResultSlice,
  },
});

export default store;
