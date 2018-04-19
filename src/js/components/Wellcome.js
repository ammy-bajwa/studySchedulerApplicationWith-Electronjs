import React, { Component } from 'react';

class Wellcome extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="card">
      <div className="card-body
      text-center
      text-xl" id="welcomeCardBody">
        Wellcome To The Application Here You Can Add A Subject And Can View All The Subjects
      </div>
    </div>
    <div className="container-fluid m-4" id="wellcomeBTN">
      <button className="btn btn-primary m-2">Add A Subject</button>
      <button className="btn btn-primary m-2">Show All Subjects</button>
    </div>
      </div>
    );
  }
}

export default Wellcome;
