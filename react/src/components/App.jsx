import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

const AppWrapper = styled.div`
    font-family: 'Roboto';
`;

export const App = () => {
    useEffect(() => {
        window.rctools.onSaveAsMenuClick((_, filepath) => {
            console.log(`Save As clicked. Filepath: ${filepath}`);
        });
    });
    const state = useSelector((state) => state);
    console.log('State!!!', state);
    return (
        <AppWrapper>
            <Header />
            <Outlet />
        </AppWrapper>
    );
};
