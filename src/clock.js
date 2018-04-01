import React, { Component } from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
      console.log("Constructor was here")
    }
  
    componentDidMount() {
      console.log("DidMount was here")
      this.timerID = setInterval(
        () => this.tick(),
        this.props.interval
      );
    }
  
    componentWillUnmount() {
      console.log("WillUnmount was here")
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
    render() {
      console.log("A render was here")
        return (
          <div>
            <h1>{this.props.message}</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }
export default Clock;

