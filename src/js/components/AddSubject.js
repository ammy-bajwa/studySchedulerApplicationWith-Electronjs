import React, { Component } from 'react';
import Header from './Header';
import uuid from 'uuid';
import moment from 'moment';



class AddSubject extends React.Component {
  addSubjectFormHandler = (e) => {
    e.preventDefault();
    let subjects;
    if(!localStorage['subjects']){
       subjects = [];
      let parseSubjects = JSON.stringify(subjects);
    localStorage.setItem('subjects',parseSubjects);
    }
     subjects = JSON.parse(localStorage.getItem('subjects'));  
    let subjectName = e.target.elements.inputSubject.value;
    let subjectCustomName = e.target.elements.inputCustomSubject.value;
    let subjectNote = e.target.elements.inputNote.value;
    let subjectTimeToStudy = e.target.elements.inputStudyTime.value.trim();
    subjectTimeToStudy = subjectTimeToStudy *3600;
    let subject;
    if(subjectName =='Choose...' && subjectCustomName == ''){
      return   document.getElementById("erroAlertDiv").style.display = 'block';
    } else if(subjectName !=='Choose...' && subjectCustomName !== ''){
      return   document.getElementById("erroAlertDiv").style.display = 'block';
    } else if(subjectName =='Choose...' && subjectCustomName !== ''){
      subject = subjectCustomName;
    } else if(subjectName !=='Choose...' && subjectCustomName == ''){
      subject = subjectName;
    }
    document.getElementById("inputSubject").selectedIndex = 0 ;
    e.target.elements.inputCustomSubject.value = '';
    e.target.elements.inputNote.value = '';
    e.target.elements.inputStudyTime.value = '';
    let date = moment().format('MMMM Do YYYY, h:mm:ss a');
    document.getElementById("erroAlertDiv").style.display = 'none'
    subjects.push({
      id:uuid(),subject,subjectNote,subjectTimeToStudy,date
    });
    let parseSubjects = JSON.stringify(subjects);
    localStorage.setItem('subjects',parseSubjects);
  }
  render() {
    return (
      <div>
      <Header />
        <div className="container-fluid rounded p-3">
        <h4 className="rounded 
        text-light
        text-center
        bg-dark p-3 m-3">Add Subject</h4>
        <form className="pt-4" onSubmit={this.addSubjectFormHandler}>
        <div className="alert alert-danger" id="erroAlertDiv">
        <strong>Subject Name!</strong> Please Add Subject Name Currectly.
         </div>
          <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="inputSubject">Select A Subject</label>
              <select id="inputSubject" className="form-control">
                <option defaultValue>Choose...</option>
                <option>English</option>
                <option>Urdu</option>
                <option>Islamiat</option>
                <option>Pakistan Studies</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
                <option>Computer</option>
                <option>Math</option>
                <option>State</option>
                <option>Arts</option>
              </select>
              </div>
              <div  className="form-group col-md-6">
              <label htmlFor="inputCustomSubject">Enter Custom Subject Name</label>
              <input type="text" className="form-control"
               id="inputCustomSubject" placeholder="Custom Subject Name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputNote">Enter Some Note</label>
            <textarea type="text" className="form-control"
             id="inputNote" placeholder="Here Will be Your Note" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputStudyTime">Enter Hours You Want To Study</label>
              <input type="number" required min="0" className="form-control"
               id="inputStudyTime" placeholder="Enter Time In Hours" />
            </div>
          </div>
          <div id="addBTN">
          <button type="submit" className="btn btn-primary">Add</button>
          </div>        
        </form>
        </div>   
      </div>
    )
  }
}


export default AddSubject;
