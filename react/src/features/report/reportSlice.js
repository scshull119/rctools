import { createSlice } from '@reduxjs/toolkit';

const initialState = { submissions: [] };

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        addSubmission: (state, action) => {
            state.submissions.push(action.payload);
        }
    }
});

export const { addSubmission } = reportSlice.actions;
export default reportSlice.reducer;
