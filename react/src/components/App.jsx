import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

const AppWrapper = styled.div`
    font-family: 'Roboto';
`;

export const App = () => {
    const state = useSelector((state) => state);
    useEffect(() => {
        window.rctools.onSaveAsMenuClick(async (_, filepath) => {
            const result = await window.rctools.saveReportState(state);
            console.log(result);
        });
    });
    console.log('State!!!', state);
    return (
        <AppWrapper>
            <Header />
            <Outlet />
        </AppWrapper>
    );
};
