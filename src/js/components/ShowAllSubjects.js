import React, { Component } from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';
import AppRoute from '../Routes/Router';
import Header from './Header';



let allSubjects = JSON.parse(localStorage.getItem('subjects'));
let subjectAbsense = true;

class ShowAllSubjects extends React.Component {
  state = {
    subjects:[]
  }
  componentDidMount(){
    if(!localStorage['subjects']){
        let subjects = [];
        let parseSubjects = JSON.stringify(subjects);
        localStorage.setItem('subjects',parseSubjects);
      } if(this.state.length == 0 ){
        subjectAbsense = true;
      }
        let allSubjects = JSON.parse(localStorage.getItem('subjects'));
        this.setState(()=>({subjects:allSubjects}));  
  }
  componentWillMount(){
    this.setState(()=>{subjects:[]});
  }
  removeSubject = (id) => {
    let filteredSubjects = this.state.subjects.filter((subjectObj)=>{
      return subjectObj.id !== id;
    });
    let parseSubjects = JSON.stringify(filteredSubjects);
    localStorage.setItem('subjects',parseSubjects); 
    let allSubjects = JSON.parse(localStorage.getItem('subjects'));
    this.setState(()=>({subjects:allSubjects}));
    console.log(filteredSubjects);
    render( <AppRoute />, document.getElementById('root'));
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
        {this.state.subjects.length == 0 ? <div className="card">
          <div className="card-body">
            <h4 className="card-title text-center">There Is No Subject</h4>
            <p className="card-text text-center">Please Add A Subject.</p>
          </div>
      </div> : this.state.subjects.map((subjectObj,index)=>{
          return <div className="container-fluid border border-dark rounded"
          id="showSubjectDiv"
          key={index}>
           <h4 className="text-center">Subject No {index+1}</h4>
          <div>
          <div className="container-fluid">          
           <Link to={`/subject/:${subjectObj.id}`}><h4 className="text-center p-2">{subjectObj.subject}</h4></Link>
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
