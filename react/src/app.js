import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Root } from './components/Root';

const domContainer = document.getElementById('reactapp');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Root));
