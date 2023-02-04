import React from 'react';
import { useSelector } from 'react-redux';

export const SubmissionsList = () => {
    const races = useSelector((state) => state.data.races);
    return races.map((race) => (
        <div key={race.name}>
            <h2>{race.name}</h2>
            <ul>
                {race.submissions.map((submission, i) => (
                    <li key={i}>{`${submission.name} (${submission.pronouns}): ${submission.finishTime}`}</li>
                ))}
            </ul>
        </div>
    ));
};
