import React, { Component } from 'react';
import { render } from 'react-dom';
import App from '../App';
import Header from './Header';


let allSubjects = JSON.parse(localStorage.getItem('subjects'));

class ShowAllSubjects extends React.Component {
  removeSubject = (id) => {
    let subjects = allSubjects.filter((subjectObj)=>{
      return subjectObj.id !== id;
    });
    let parseSubjects = JSON.stringify(subjects);
    localStorage.setItem('subjects',parseSubjects);
    render(<App />, document.getElementById('root'));
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
        {allSubjects.length == 0 ? <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center">There Is No Subject</h4>
          <p className="card-text text-center">Please Add A Subject.</p>
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
            <button className="btn btn-danger"
             onClick={
               ()=>{
                this.removeSubject(subjectObj.id)
            }
          }>Remove</button>
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
