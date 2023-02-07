import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RaceView = () => {
    const { id } = useParams();
    const race = useSelector((state) => state.data.races.find(race => race.id === id));
    return (
        <h1>{race.name}</h1>
    );
}

export { RaceView };
