import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './HomePage';
import RosterPage from './RosterPage';
import NotFoundPage from './NotFoundPage';
import ProfilePage from './ProfilePage';
import PrivateRoute from '../components/PrivateRoute';

const Routes = class Routes extends React.Component {
    render(){
        return(
            <Switch>
                <Route path = "/" exact component = {HomePage}/>
                <PrivateRoute path = "/roster" exact component = {RosterPage}/>
                <PrivateRoute path = "/profile" component = {ProfilePage}/>
                <Route exact component = {NotFoundPage} />
            </Switch>
        )
    }
};

export default Routes;