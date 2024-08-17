import { configureStore } from '@reduxjs/toolkit';
import answersSlice from './slices/answersSlice';
import testTypeSlice from './slices/testTypeSlice';
import questionsSlice from './slices/questionsSlice';
import modalAnswerResultSlice from './slices/modalAnswerResultSlice';
import uiInterfaceSlice from './slices/uiInterfaceSlice';

const store = configureStore({
  reducer: {
    testType: testTypeSlice,
    questions: questionsSlice,
    answers: answersSlice,
    modalAnswerResult: modalAnswerResultSlice,
    uiInterface: uiInterfaceSlice,
  },
});

export default store;
