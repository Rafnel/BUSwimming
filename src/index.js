import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './utils/theme';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import UserStateStore from './utils/state/UserStateStore';
import UIStateStore from './utils/state/UIStateStore';
import RosterStateStore from './utils/state/RosterStateStore';
import { Auth0Provider } from './utils/react-auth0-spa';
import config from "./auth_config.json";
import history from './utils/history';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
};

ReactDOM.render(
    <Provider 
        userState = {new UserStateStore()} 
        uiState = {new UIStateStore()} 
        rosterState = {new RosterStateStore()}
    >
        <Auth0Provider
            domain = {config.domain}
            client_id = {config.client_id}
            redirect_uri = {window.location.origin}
            onRedirectCallback = {onRedirectCallback}
        >
            <Router history = {history}>
                <ThemeProvider theme = {theme}>
                    <App/>
                </ThemeProvider>
            </Router>
        </Auth0Provider>
    </Provider>, 
    document.getElementById('root')
);