import { createSlice } from '@reduxjs/toolkit';

const initialState = { list: [] };

export const submissionsSlice = createSlice({
    name: 'submissions',
    initialState,
    reducers: {
        add: (state, action) => {
            console.log('Running add action');
            state.list.push(action.payload);
        }
    }
});

export const { add } = submissionsSlice.actions;
export default submissionsSlice.reducer;
