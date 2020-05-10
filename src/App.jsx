import React from 'react';
import HeaderBar from './components/HeaderBar';
import { Provider, observer } from 'mobx-react';
import UIStateStore from './utils/state/UIStateStore';
import MenuDrawer from './components/MenuDrawer';
import Routes from './pages/Routes';
import RosterStateStore from './utils/state/RosterStateStore';
import SuccessMessage from './components/SuccessMessage';
import { Auth0Provider } from './utils/react-auth0-spa';

import UserStateStore from './utils/state/UserStateStore';

const App = observer(class App extends React.Component {
    render(){
        return(
            <div>
                <HeaderBar/>
                <Routes/>
                <MenuDrawer/>
                <SuccessMessage/>
            </div>
        )
    }
});

export default App;