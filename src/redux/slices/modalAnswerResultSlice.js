import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModalAnswerResult: false,
};

const modalAnswerResultSlice = createSlice({
  name: 'modalAnswerResult',
  initialState,
  reducers: {
    setModalAnswerResultShow(state, action) {
      state.showModalAnswerResult = action.payload;
    },
  },
});

export const { setModalAnswerResultShow } = modalAnswerResultSlice.actions;
export default modalAnswerResultSlice.reducer;
