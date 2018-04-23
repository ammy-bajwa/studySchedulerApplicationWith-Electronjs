import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
        <Navbar />
      </div>
    );
  }
}

export default Header;



class Navbar extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <b className="navbar-brand">Alpha Coders</b>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav p-2">
      <li className="nav-item active">
        <Link className="nav-a" to="/"><button className="btn btn-light">Home</button> <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-a" to="/add"><button className="btn btn-light">Add Subject</button></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-a" to="/show"><button className="btn btn-light">Show All Subject</button></Link>
      </li>
    </ul>
  </div>
</nav>
      </div>
    );
  }
}





