import React, { Component } from 'react';
import Header from './components/Header';
import Wellcome from './components/Wellcome';
import AddSubject from './components/AddSubject';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Wellcome />
        <AddSubject />
      </div>
    );
  }
}

export default App;
