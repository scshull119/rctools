import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { mergeRaces } from './reportSlice';

const RaceView = () => {
    const { id } = useParams();
    const [isMerge, setIsMerge] = useState(false);
    const races = useSelector((state) => state.data.races);
    const dispatch = useDispatch();
    const race = races.find(race => race.id === id);
    const mergeOptions = races.filter((race) => race.id !== id);
    const [mergeTargetId, setMergeTargetId] = useState(mergeOptions[0] ? mergeOptions[0].id : '');

    return (race &&
        <div>
            <h1>{race.name}</h1>
            <form>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isMerge}
                            disabled={mergeOptions.length < 1}
                            onChange={(e) => setIsMerge(e.target.checked)}
                        />
                        Merge
                    </label>
                    {isMerge &&
                        <select
                            value={mergeTargetId}
                            onChange={(e) => {
                                setMergeTargetId(e.target.value)
                            }}
                        >
                            {mergeOptions.map((mergeOption) => (
                                <option
                                    key={mergeOption.id}
                                    value={mergeOption.id}
                                >
                                    {mergeOption.name}
                                </option>
                            ))}
                        </select>
                    }
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={(e)=> {
                            e.preventDefault();
                            if (isMerge) {
                                dispatch(mergeRaces({
                                    sourceRaceId: race.id,
                                    targetRaceId: mergeTargetId
                                }));
                            }
                        }}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export { RaceView };
