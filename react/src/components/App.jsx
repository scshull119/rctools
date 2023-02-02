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

const saveReportState = async (state) => {
    const result = await window.rctools.saveReportState(state);
    console.log(result);
};

export const App = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        loadOpenFileData(dispatch);
    }, []);
    useEffect(() => {
        console.log('New dispatch');
        window.rctools.openMenu.removeAllListeners();
        window.rctools.openMenu.setOnClick(() => {
            loadOpenFileData(dispatch);
        });
    }, [dispatch]);
    useEffect(() => {
        window.rctools.saveAsMenu.removeAllListeners();
        window.rctools.saveAsMenu.setOnClick(() => {
            saveReportState(state);
        });
        window.rctools.saveMenu.removeAllListeners();
        window.rctools.saveMenu.setOnClick(() => {
            saveReportState(state);
        });
    }, [state]);
    console.log('State!!!', state);
    return (
        <AppWrapper>
            <Header />
            <Outlet />
        </AppWrapper>
    );
};
