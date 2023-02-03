import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    meta: {
        saveTime: null
    },
    data: {
        races: []
    },
    text: ""
};

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        addSubmission: (state, action) => {
            const submission = action.payload;
            const matchingRace = state.data.races.find((race) => (
                submission.raceName === race.name
            ));
            if (matchingRace) {
                matchingRace.submissions.push(submission);
            } else {
                state.data.races.push({
                    name: submission.raceName,
                    submissions: [submission]
                });
            }
        },
        loadFromFile: (state, action) => {
            state.data = action.payload.data,
            state.text = action.payload.text,
            state.meta = action.payload.meta
        }
    }
});

export const { addSubmission, loadFromFile } = reportSlice.actions;
export default reportSlice.reducer;
