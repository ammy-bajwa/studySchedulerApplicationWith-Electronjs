import React from 'react';
import {HashRouter,Route,Switch } from 'react-router-dom';
import AddSubject from '../components/AddSubject';
import ShowAllSubjects from '../components/ShowAllSubjects'
import Subject from '../components/Subject';
import App from '../App';



const AppRoute = () => {
    return (
            <HashRouter>
                <Switch>
                    <Route path='/' component={App}  exact={true}/>
                    <Route path='/add' component={AddSubject}/>
                    <Route path='/show' component={ShowAllSubjects}/>
                    <Route path='/subject/:id' component={Subject}/>
                </Switch>
            </HashRouter>
    );
}

export default AppRoute;