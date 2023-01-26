import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { InputForm } from './InputForm';
import { SubmissionsList } from './SubmissionsList';

const AppWrapper = styled.div`
    font-family: 'Roboto';
`;

export const App = () => {
    const state = useSelector((state) => state);
    console.log('State!!!', state);
    return (
        <AppWrapper>
            <h1>Welcome to RCTools</h1>
            <InputForm />
            <SubmissionsList />
        </AppWrapper>
    );
};
