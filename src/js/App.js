import React, { Component } from 'react';
import Header from './components/Header';
import Wellcome from './components/Wellcome';
import AddSubject from './components/AddSubject';
import ShowAllSubjects from './components/ShowAllSubjects';



class App extends React.Component {
  render() {
    return (
      <div>
        <ShowAllSubjects />
        <AddSubject />
      </div>
    );
  }
}

export default App;
