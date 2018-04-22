import React from 'react';
import {HashRouter,Route,Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddSubject from '../components/AddSubject';
import ShowAllSubjects from '../components/ShowAllSubjects';
import App from '../App';



export const history = createHistory();
const AppRoute = () => {
    return (
            <HashRouter>
                <Switch>
                    <Route path='/' component={App}  exact={true}/>
                    <Route path='/add' component={AddSubject}/>
                    <Route path='/show' component={ShowAllSubjects}/>
                </Switch>
            </HashRouter>
    );
}

export default AppRoute;