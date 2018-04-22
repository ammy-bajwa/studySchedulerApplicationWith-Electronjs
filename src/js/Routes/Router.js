import React from 'react';
import {HashRouter,Route,Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddSubject from '../components/AddSubject';
import ShowAllSubjects from '../components/ShowAllSubjects'
import Subject from '../components/Subject';
import App from '../App';



if(localStorage['subjects']){
    console.log('subjects are present')
}
let subjectObj = {"id":"19c2de01-d95b-4543-8199-8bd430cbe78e",subject:"Islamiat",subjectNote:"ejhaksdjhlaksdhlashdlahdslwrejhaksdjhlaksdhlashdlahdslwrejhaksdjhlaksdhlashdlahdslwrejhaksdjhlaksdhlashdlahdslwrejhaksdjhlaksdhlashdlahdslwrejhaksdjhlaksdhlashdlahdslwrejhaksdjhlaksdhlashdlahdslwr",subjectTimeToStudy:4,"date":"April 21st 2018, 11:37:59 pm"}
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