import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Entry = ({ fieldName, fieldValue }) => (
    <div>
        <strong>{fieldName}</strong>: {fieldValue}
    </div>
);

const SubmissionView = () => {
    const submissions = useSelector((state) => (
        state.data.races.reduce((submissions, race) => (
            [...submissions, ...race.submissions]
        ), [])
    ));
    const { id } = useParams();
    if (!submissions.length) {
        return (<h1>No submissions loaded.</h1>)
    }

    const activeIndex = id ? submissions.findIndex((sub) => sub.id === id) : 0;
    const submission = submissions[activeIndex];

    return (
        <div>
            <Entry fieldName="Name" fieldValue={submission.name} />
            {activeIndex > 0 && <Link to={submissions[activeIndex - 1].id}>Back</Link>}
            {activeIndex < submissions.length - 1 && <Link to={submissions[activeIndex + 1].id}>Next</Link>}
        </div>
    )
};

export { SubmissionView };
