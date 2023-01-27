import React from 'react';
import { useSelector } from 'react-redux';

export const SubmissionsList = () => {
    const submissions = useSelector((state) => state.submissions);
    return (
        <ul>
            {submissions.map((submission, i) => <li key={i}>{submission.name}</li>)}
        </ul>
    );
};
