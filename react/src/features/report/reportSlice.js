import { createSlice } from '@reduxjs/toolkit';

const initialState = { submissions: [] };

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        addSubmission: (state, action) => {
            state.submissions.push(action.payload);
        },
        loadFromFile: (state, action) => {
            state.submissions = action.payload;
        }
    }
});

export const { addSubmission, loadFromFile } = reportSlice.actions;
export default reportSlice.reducer;
