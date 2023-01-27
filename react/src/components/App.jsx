import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

const AppWrapper = styled.div`
    font-family: 'Roboto';
`;

export const App = () => {
    const state = useSelector((state) => state);
    console.log('State!!!', state);
    return (
        <AppWrapper>
            <Header />
            <Outlet />
        </AppWrapper>
    );
};
