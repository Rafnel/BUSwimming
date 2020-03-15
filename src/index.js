import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './utils/theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme = {theme}>
            <App/>
        </ThemeProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);