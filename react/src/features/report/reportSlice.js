import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

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
            const submission = {
                id: uuidv4(),
                ...action.payload
            };
            const matchingRace = state.data.races.find((race) => (
                submission.raceName === race.name
            ));
            if (matchingRace) {
                matchingRace.submissions.push({
                    ...submission,
                    raceId: matchingRace.id
                });
            } else {
                const newRaceId = uuidv4();
                state.data.races.push({
                    id: newRaceId,
                    name: submission.raceName,
                    submissions: [{
                        ...submission,
                        raceId: newraceId
                    }]
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
