import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center
        bg-primary p-5 rounded
        text-xl
        text-light">Study Scheduler Application</h1>
        <h4 className="rounded 
        text-light
        text-center
        bg-secondary p-3">Make Study Organized</h4>
      </div>
    );
  }
}

export default Header;
