import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { App } from './App';
import '../styles/fonts.css';

export const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
