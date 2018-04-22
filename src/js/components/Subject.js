import React, { Component } from 'react';
import Header from './Header';

var timerInterval;

class Subject extends React.Component {
    timerHandler = (value) => {
        if(value == 'start') {
            let totalSeconds = this.props.subjectObj.subjectTimeToStudy;
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
        <h4 className="text text-primary text-center">Subject Is {this.props.subjectObj.subject}</h4>
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
            {this.props.subjectObj.subjectNote}
        </div>
    </div>
    </div>
        </div>    
          
            <div id="subjectOkBTN">
                <button className="btn btn-danger p-3">Ok</button>              
            </div>
        </div>
    );
  }
}

export default Subject;



