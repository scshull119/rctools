import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { parseForm } from '../../util/parseForm';
import { addSubmission } from './reportSlice';

export const InputForm = () => {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    const onFormSubmit = (e) => {
        e.preventDefault();
        const result = parseForm(inputText);
        if (!result) {
            return alert('Invalid input!');
        }
        alert('Submission successfully imported.');
        setInputText('');
        dispatch(addSubmission(result));
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
