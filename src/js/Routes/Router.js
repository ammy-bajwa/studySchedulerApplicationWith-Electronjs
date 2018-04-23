import React from 'react';
import {HashRouter,Route,Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddSubject from '../components/AddSubject';
import ShowAllSubjects from '../components/ShowAllSubjects'
import Subject from '../components/Subject';
import App from '../App';



if(!localStorage['subjects']){
    let subjects = [];
    let parseSubjects = JSON.stringify(subjects);
    localStorage.setItem('subjects',parseSubjects);
}

export const history = createHistory();
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