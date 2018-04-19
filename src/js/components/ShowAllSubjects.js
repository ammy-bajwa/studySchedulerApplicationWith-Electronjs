import React, { Component } from 'react';
import Header from './Header';

class ShowAllSubjects extends React.Component {
  getAllSubjects = () => {
    let allSubjects = JSON.parse(localStorage.getItem('subjects'));
   
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="container-fluid rounded p-3">
        <h4 className="rounded
        text-light
        text-center
        bg-dark p-3 m-3">Show All Subjects</h4>
        {!localStorage['subjects'] ? <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div> : JSON.parse(localStorage.getItem('subjects')).map((subjectObj,index)=>{
          return <div className="container-fluid border border-dark rounded"
          id="showSubjectDiv"
          key={index}>
               <h4 className="text-center">Subject No {index+1}</h4>
          <div>
          <div className="container-fluid">          
           <h4 className="text-center p-2">{subjectObj.subject}</h4>
           <h5 className="text-center">{subjectObj.date}</h5>
           <div id="removeBTN">
            <button className="btn btn-danger">Remove</button>
           </div>
          </div>
        </div>
          </div>
         
      })}
        </div>
      </div>
    );
  }
}

export default ShowAllSubjects;
