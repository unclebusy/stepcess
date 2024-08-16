import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uiInterfaceLanguage: 'RU',
  uiInterfaceTheme: 'light',
};

const uiInterfaceSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setUiInterfaceLanguage(state, action) {
      state.uiInterfaceLanguage = action.payload;
    },
    setUiInterfaceTheme(state, action) {
      state.uiInterfaceTheme = action.payload;
    },
  },
});

export const { setUiInterfaceLanguage, setUiInterfaceTheme } = uiInterfaceSlice.actions;
export default uiInterfaceSlice.reducer;
