import { configureStore } from '@reduxjs/toolkit';
import submissionsReducer from '../features/submissions/submissionsSlice';

export const store = configureStore({
    reducer: submissionsReducer
});
