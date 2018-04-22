import React, { Component } from 'react';
import Subject from './components/Subject';
import Wellcome from './components/Wellcome';
import Header from './components/Header';
import ShowAllSubjects from './components/ShowAllSubjects';
import AddSubject from './components/AddSubject';

let subjectObj = {"id":"19c2de01-d95b-4543-8199-8bd430cbe78e",subject:"Islamiat",subjectNote:"ejhaksdjhlaksdhlashdlahdslwrejhaksdjhlaksdhlashdlahdslwrejhaksdjhlaksdhlashdlahdslwrejhaksdjhlaksdhlashdlahdslwrejhaksdjhlaksdhlashdlahdslwrejhaksdjhlaksdhlashdlahdslwrejhaksdjhlaksdhlashdlahdslwr",subjectTimeToStudy:0,"date":"April 21st 2018, 11:37:59 pm"}


class App extends React.Component {
  render() {
    return (
      <div>
        <Wellcome />
        <ShowAllSubjects />
        <AddSubject />
        <Subject subjectObj = {subjectObj}/>
      </div>
    );
  }
}

export default App;
