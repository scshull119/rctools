import { configureStore } from '@reduxjs/toolkit';
import reportReducer from '../features/report/reportSlice';

export const store = configureStore({
    reducer: reportReducer
});
