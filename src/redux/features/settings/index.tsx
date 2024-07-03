import { createSlice } from '@reduxjs/toolkit';

export interface SettingsState {
  isDark: boolean;
  language: string;
  count: number;
}

const initialState: SettingsState = {
  isDark: false,
  language: 'en',
  count: 0,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleThemeMode } = settingsSlice.actions;

export default settingsSlice.reducer;
