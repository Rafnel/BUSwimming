import React from 'react';
import HeaderBar from './components/HeaderBar';
import { observer } from 'mobx-react';
import MenuDrawer from './components/MenuDrawer';
import Routes from './pages/Routes';
import SuccessMessage from './components/SuccessMessage';
import ErrorMessage from './components/ErrorMessage';


const App = observer(class App extends React.Component {
    render(){
        return(
            <div>
                <HeaderBar/>
                <Routes/>
                <MenuDrawer/>
                <SuccessMessage/>
                <ErrorMessage/>
            </div>
        )
    }
});

export default App;