import React, { Component } from 'react';
import Header from './Header';


class Subject extends React.Component {
    constructor(){
        super();
        this.state = {
            timer: '0',
            control:true
        }
    }
    getTime = () => {
        var totalTime = 1;
        var totalMinutes = totalTime * 60 ;
        let totalSeconds = totalMinutes * 60;
        setInterval(()=>{
            --totalSeconds;
            totalMinutes = Math.ceil((totalSeconds / 60) );
            document.getElementById("timer").textContent  = `${totalMinutes}m  ${totalSeconds}s`;
        },1000)
        

       
    }
    start = () => {
        return this.setState(()=>{
            control:false
        })
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
        {this.getTime()}
        <progress value="0" max="10" id="progressBar"></progress>
            <div className="border m-2 p-2">
                <h4 className="text-center">Subject Is {}</h4>
                <h4 className="text-center" id="counter">Timer {}</h4>
                <div id="timerDiv" className="border border-primary">
                    <p id="timer"></p>
                </div>
            <div id="timerBTN">
                <button className="btn btn-primary m-2" onClick={this.getTime()}>Start</button>              
                <button className="btn btn-primary m-2">Stop</button>
            </div>
            </div>
        </div>
    );
  }
}

export default Subject;



