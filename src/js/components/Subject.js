import React, { Component } from 'react';
import Header from './Header';

var timerInterval;

class Subject extends React.Component {
    timerHandler = (value) => {
        if(value == 'start') {
            let totalSeconds = 3600;
             timerInterval = window.setInterval(()=>{
                --totalSeconds;
                let totalMinutes = Math.ceil((totalSeconds / 60) );
                document.getElementById("timer").textContent  = `${totalMinutes}m  ${totalSeconds}s`;
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
        <progress value="0" max="10" id="progressBar"></progress>
            <div className="border m-2 p-2">
                <h4 className="text-center">Subject Is {}</h4>
                <h4 className="text-center" id="counter">Timer {}</h4>
                <div id="timerDiv" className="border border-primary">
                    <p id="timer"></p>
                </div>
            <div id="timerBTN">
                <button className="btn btn-primary m-2" onClick={()=>{this.timerHandler('start')}}>Start</button>              
                <button className="btn btn-primary m-2" onClick={()=>{
                    this.timerHandler('stop');
                }}>Stop</button>
            </div>
            </div>
        </div>
    );
  }
}

export default Subject;



