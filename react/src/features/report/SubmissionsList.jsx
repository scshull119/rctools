import React from 'react';
import { useSelector } from 'react-redux';

export const SubmissionsList = () => {
    const races = useSelector((state) => state.data.races);
    return races.map((race) => {
        const raceSubmissions = [...race.submissions];
        raceSubmissions.sort((a, b) => a.timeSeconds - b.timeSeconds);
        return (
            <div key={race.id}>
                <h2>{race.name}</h2>
                <ul>
                    {raceSubmissions.map((submission) => (
                        <li key={submission.id}>{`${submission.name} (${submission.pronouns}): ${submission.timeString}`}</li>
                    ))}
                </ul>
            </div>
        );
    });
};
