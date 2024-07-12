import { configureStore } from '@reduxjs/toolkit';
import textColorReducer from './textColorSlice';

export const store = configureStore({
    reducer: {
        textColor: textColorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
