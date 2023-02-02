import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { loadFromFile as loadReportFromFile } from '../features/report/reportSlice';

const AppWrapper = styled.div`
    font-family: 'Roboto';
`;

const loadOpenFileData = async (dispatch) => {
    const dataString = await window.rctools.getOpenFileData();
    if (dataString) {
        const data = JSON.parse(dataString);
        dispatch(loadReportFromFile(data.submissions));
    }
};

export const App = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        window.rctools.onOpenMenuClick(() => {
            loadOpenFileData(dispatch);
        });
        window.rctools.onSaveAsMenuClick(async (_, filepath) => {
            const result = await window.rctools.saveReportState(state);
            console.log(result);
        });
        loadOpenFileData(dispatch);
    }, []);
    console.log('State!!!', state);
    return (
        <AppWrapper>
            <Header />
            <Outlet />
        </AppWrapper>
    );
};
