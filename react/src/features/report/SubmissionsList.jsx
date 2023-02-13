import React from 'react';
import { useSelector } from 'react-redux';

export const SubmissionsList = () => {
    const races = useSelector((state) => state.data.races);
    return races.map((race) => (
        <div key={race.id}>
            <h2>{race.name}</h2>
            <ul>
                {race.submissions.map((submission) => (
                    <li key={submission.id}>{`${submission.name} (${submission.pronouns}): ${submission.timeString}`}</li>
                ))}
            </ul>
        </div>
    ));
};
