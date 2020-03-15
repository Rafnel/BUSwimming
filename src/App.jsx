import React from 'react';
import HeaderBar from './components/HeaderBar';
import { Provider, observer } from 'mobx-react';
import UIStateStore from './utils/state/UIStateStore';
import MenuDrawer from './components/MenuDrawer';
import Routes from './pages/Routes';


const App = observer(class App extends React.Component {
    render(){
        return(
            <Provider uiState = {new UIStateStore()}>
                <div>
                    <HeaderBar/>
                    <Routes/>
                    <MenuDrawer/>
                </div>
            </Provider>
        )
    }
});

export default App;