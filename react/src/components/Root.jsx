import React from 'react';
import { Provider } from 'react-redux';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { store } from '../app/store';
import { App } from './App';
import { InputForm } from '../features/report/InputForm';
import { OutlineView } from '../features/report/OutlineView';
import { RaceManager } from '../features/report/RaceManager';
import { RaceView } from '../features/report/RaceView';
import { SubmissionView } from '../features/report/SubmissionView';
import '../styles/fonts.css';

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'input',
                element: <InputForm />
            },
            {
                path: 'outline',
                element: <OutlineView />
            },
            {
                path: 'races/:id',
                element: <RaceView />
            },
            {
                path: 'submissions',
                element: <SubmissionView />,
                children: [
                    {
                        path: ':id',
                        element: <SubmissionView />
                    }
                ]
            },
            {
                path: 'races',
                element: <RaceManager />
            }
        ]
    }
]);

export const Root = () => (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
