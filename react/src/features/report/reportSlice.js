import { createSlice } from '@reduxjs/toolkit';

const initialState = { submissions: [] };

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        addSubmission: (state, action) => {
            console.log('Running add action');
            state.submissions.push(action.payload);
        }
    }
});

export const { addSubmission } = reportSlice.actions;
export default reportSlice.reducer;
