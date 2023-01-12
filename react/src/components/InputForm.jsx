import React, { useState } from 'react';
import { parseForm } from '../util/parseForm';

export const InputForm = () => {
    const [inputText, setInputText] = useState('');
    const onFormSubmit = (e) => {
        e.preventDefault();
        const result = parseForm(inputText);
        console.log(result);
    };
    const onTextAreaChange = (e) => {
        setInputText(e.target.value);
    }
    return (
        <form>
            <div>
                <textarea
                    rows="15"
                    cols="70"
                    value={inputText}
                    onChange={onTextAreaChange}
                />
            </div>
            <button type="submit" onClick={onFormSubmit}>Submit</button>
        </form>
    );
};
