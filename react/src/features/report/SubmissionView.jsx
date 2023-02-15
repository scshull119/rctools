import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Entry = ({ fieldName, fieldValue }) => (
    <div>
        <strong>{fieldName}</strong>: {fieldValue}
    </div>
);

const EntryWrapper = styled.div`
    margin-bottom: 1rem;
`;

const WarningWrapper = styled.div`
    color: ${(props) => props.color};
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1rem;
`;

const BackNextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

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
            <EntryWrapper>
                <Entry fieldName="name" fieldValue={submission.name} />
                <Entry fieldName="gender" fieldValue={submission.gender} />
                <Entry fieldName="pronouns" fieldValue={submission.pronouns} />
                <Entry fieldName="race" fieldValue={submission.raceName} />
                <Entry fieldName="distance" fieldValue={submission.distance} />
                <Entry fieldName="other distance" fieldValue={submission.otherRaces} />
                <Entry fieldName="finish time" fieldValue={submission.timeString} />
                <Entry fieldName="anyting noteworthy?" fieldValue={submission.noteworthy} />
            </EntryWrapper>
            {!submission.includeInReport &&
                <WarningWrapper color="red">
                    This submission should not be included in the Race Report.
                </WarningWrapper>
            }
            {!submission.includeInReport &&
                <WarningWrapper color="purple">
                    This submission's time should not be included in the Race Report.
                </WarningWrapper>
            }
            <BackNextWrapper>
                {activeIndex > 0 && <Link to={submissions[activeIndex - 1].id}>Back</Link>}
                {activeIndex < submissions.length - 1 && <Link to={submissions[activeIndex + 1].id}>Next</Link>}
            </BackNextWrapper>
        </div>
    )
};

export { SubmissionView };
