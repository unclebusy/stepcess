import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testTypeName: 'Frontend',
};

const testTypeSlice = createSlice({
  name: 'testType',
  initialState,
  reducers: {
    setTestType(state, action) {
      state.testType = action.payload;
    },
  },
});

export const { setTestType } = testTypeSlice.actions;
export default testTypeSlice.reducer;
