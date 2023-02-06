import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const BubbleWrapper = styled.div`
    background-color: lightblue;
    border-radius: 12px;
    padding: 12px;
    margin-top: 12px;
    margin-bottom: 12px;
`;

const RaceBubble = ({ race }) => (
    <BubbleWrapper>
        <div>{race.name}</div>
        <div>{`${race.submissions.length} submission(s)`}</div>
    </BubbleWrapper>
)

const RaceManager = () => {
    const races = useSelector((state) => state.data.races);
    return (
        <div>
            {races.map((race) => <RaceBubble key={race.id} race={race} />)}
        </div>
    );
};

export { RaceManager };