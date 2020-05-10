import React from 'react';
import HeaderBar from './components/HeaderBar';
import { Provider, observer } from 'mobx-react';
import UIStateStore from './utils/state/UIStateStore';
import MenuDrawer from './components/MenuDrawer';
import Routes from './pages/Routes';
import RosterStateStore from './utils/state/RosterStateStore';
import SuccessMessage from './components/SuccessMessage';
import { Auth0Provider } from './utils/react-auth0-spa';
import config from "./auth_config.json";
import history from './utils/history';
import UserStateStore from './utils/state/UserStateStore';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
};

const App = observer(class App extends React.Component {
    render(){
        return(
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
                    <div>
                        <HeaderBar/>
                        <Routes/>
                        <MenuDrawer/>
                        <SuccessMessage/>
                    </div>
                </Auth0Provider>
            </Provider>
        )
    }
});

export default App;