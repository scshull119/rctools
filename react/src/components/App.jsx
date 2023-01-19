import React from 'react';
import { useSelector } from 'react-redux';
import { InputForm } from './InputForm';

export const App = () => {
    const state = useSelector((state) => state);
    console.log('State!!!', state);
    return (
        <div>
            <h1>Welcome to RCTools</h1>
            <InputForm />
        </div>
    );
};
