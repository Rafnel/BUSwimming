import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './HomePage';
import RosterPage from './RosterPage';
import NotFoundPage from './NotFoundPage';

const Routes = class Routes extends React.Component {
    render(){
        return(
            <Switch>
                <Route path = "/" exact component = {HomePage}/>
                <Route path = "/roster" exact component = {RosterPage}/>
                <Route exact component = {NotFoundPage} />
            </Switch>
        )
    }
};

export default Routes;