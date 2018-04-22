import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

class Wellcome extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <Header />
      <div className="card">
      <div className="card-body
      text-center
      text-xl" id="welcomeCardBody">
        Wellcome To The Application Here You Can Add A Subject And Can View All The Subjects
      </div>
    </div>
    <div className="container-fluid m-4" id="wellcomeBTN">
    <Link to="/add"><button className="btn btn-primary m-2">Add A Subject</button></Link>
    <Link to="/show"><button className="btn btn-primary m-2">Show All Subjects</button></Link>
    </div>
      </div>
    );
  }
}

export default Wellcome;
