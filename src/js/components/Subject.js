import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

var timerInterval;

let allSubjects = JSON.parse(localStorage.getItem('subjects'));


class Subject extends React.Component {
    constructor(){
        super();
        this.state = {
            subjectName: null,
            note:null,
            time:null
        }
    }
    // {"id":"e564bd3e-7287-47ca-99b8-45a003377e85","subject":"Islamiat","subjectNote":"ewr","subjectTimeToStudy":10800,"date":"April 22nd 2018, 6:36:11 pm"}
    componentDidMount(){
        let subjectId = this.props.match.params.id;
        console.log(subjectId)
        let allSubjects = JSON.parse(localStorage.getItem('subjects'));
        allSubjects.forEach((subjectObj)=>{
            console.log(`:${subjectObj.id}`);
            if(`:${subjectObj.id}` == subjectId){
                console.log('ok');
                 this.setState(()=>({
                    subjectName:subjectObj.subject,
                    note:subjectObj.subjectNote,
                    time:subjectObj.subjectTimeToStudy
                 }))
            }
        });
    }
    componentWillUnmount(){
        clearInterval(timerInterval);
    }
    timerHandler = (value) => {
        console.log(this.props);
        if(value == 'start') {
            let totalSeconds = this.state.time;
             timerInterval = window.setInterval(()=>{
                --totalSeconds;
                let totalMinutes = Math.ceil((totalSeconds / 60) );
                if(totalSeconds <= 0){
                    return  document.getElementById("timer").textContent  = `You Have Successfully Completed The Subject Study Task`;
                }
                return document.getElementById("timer").textContent  = `${totalMinutes} Minutes Which Is  ${totalSeconds} Seconds Are Remaining`;
             
            },1000);
        } else if(value == 'stop'){
            clearInterval(timerInterval);
        }
        
    }
  render() {
    return (
        <div className="container-fluid">
            <Header />
        <div className="container-fluid rounded p-3">
            <h4 className="rounded 
            text-light
            text-center
            bg-dark p-3 m-3">Subject</h4>
        </div>   
        <h4 className="text text-primary text-center">Subject Is {this.state.subjectName}</h4>
        <div className="border m-2">
        <div className="mt-5 p-2" id="subjectDivLeft">
               
        <h5 className="text text-secondary text-center pt-6">This Is Counter For Subject</h5>
        <div>
            <h5 id="timer" className="text-primary m-5 text-center">Here Will Be Your Subject Counter</h5>
        </div>
    <div id="timerBTN">
        <button className="btn btn-primary m-2" onClick={()=>{this.timerHandler('start')}}>Start</button>              
        <button className="btn btn-primary m-2" onClick={()=>{this.timerHandler('stop')}}>Stop</button>
    </div>
    </div>
    <div className="mt-5 p-2" id="subjectDivRight">
       
    <h5 className="text text-secondary text-center pt-6">Here Is Your Note For Subject</h5>
    <div className="card">
        <div className="card-body text-center" id="subjectCardDiv">
           {this.state.note}
        </div>
    </div>
    </div>
        </div>    
          
            <div id="subjectOkBTN">
                <Link to="/show"><button className="btn btn-danger p-3">Ok</button></Link>              
            </div>
        </div>
    );
  }
}

export default Subject;



