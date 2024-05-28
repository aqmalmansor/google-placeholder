import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UiReduxState } from './types';

const initialState: UiReduxState = {
    darkMode: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        uiSetDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
        },
    },
});

export type UiState = typeof initialState;

export default {
    actions: uiSlice.actions,
    reducers: uiSlice.reducer,
};
