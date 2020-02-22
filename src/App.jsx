import React from 'react';
import HeaderBar from './components/HeaderBar';
import { Provider, observer } from 'mobx-react';
import UIStateStore from './utils/state/UIStateStore';
import MenuDrawer from './components/MenuDrawer';


const App = observer(class App extends React.Component {
    render(){
        return(
            <Provider uiState = {new UIStateStore()}>
                <div>
                    <HeaderBar/>
                    <MenuDrawer/>
                </div>
            </Provider>
        )
    }
});

export default App;