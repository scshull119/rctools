import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RaceView = () => {
    const { id } = useParams();
    const races = useSelector((state) => state.data.races);
    const race = races.find(race => race.id === id);
    const mergeOptions = races.filter((race) => race.id !== id);
    const [isMerge, setIsMerge] = useState(false);
    return (race &&
        <div>
            <h1>{race.name}</h1>
            <form>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isMerge}
                            onChange={(e) => setIsMerge(e.target.checked)}
                        />
                        Merge
                    </label>
                    {isMerge &&
                        <select>
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
                            console.log('Form submitted');
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
