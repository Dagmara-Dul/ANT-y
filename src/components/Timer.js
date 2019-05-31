import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

  class TimerInput extends React.Component {
    render() {
      return (
       <div style={{marginLeft:100}}>
          <h3>Input your desired time</h3>
          <input type="number" minutes={this.props.minutes} handleChange={this.props.handleChange} required />
      </div>
         );
       }
    }
    
    class Timer extends React.Component {
       render() {
          return (
           <div>
            <h1 style={{ fontSize: 100, marginLeft:100 }}> 
            {this.props.minutes}:{this.props.seconds}
            </h1>
           </div>
         );
       }
     }
    class StartButton extends React.Component {
       render() {
         return(
            <div style={{ marginLeft: 130 }}>
            <button>Start</button>
          </div>
          );
      }
    }
    class App extends React.Component {
        constructor(props){
        super(props);
         this.state = {
          seconds: '00',   // responsible for the seconds 
          minutes: ''  // responsible for the minutes
       }
    }
    // bind the method to the constructor
   // this.handleChange = this.handleChange.bind(this);
    handleChange= (event)=> {
       this.setState({
         minutes: event.target.value
       })
    }
    render() {
          return (
           <div>
            <TimerInput minutes={this.state.minutes} handleChange={this.handleChange}/>
            <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
           <StartButton/>
          </div>
         );
       }
     }