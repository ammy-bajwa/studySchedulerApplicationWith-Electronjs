import React, { Component } from 'react';
import Header from './components/Header';
import Wellcome from './components/Wellcome';
import AddSubject from './components/AddSubject';
import ShowAllSubjects from './components/ShowAllSubjects';
import Subject from './components/Subject';



class App extends React.Component {
  render() {
    return (
      <div>
        <Subject />        
      </div>
    );
  }
}

export default App;
