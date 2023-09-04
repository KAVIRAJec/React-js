import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      elapsedTime: 0,
    };
  }

  handleStart = () => {
    if (!this.state.isRunning) {
      this.setState({
        isRunning: true,
      });
      this.timer = setInterval(() => {
        this.setState({
          elapsedTime: this.state.elapsedTime + 1,
        });
      }, 1000);
    }
  };

  handleStop = () => {
    if (this.state.isRunning) {
      clearInterval(this.timer);
      this.setState({
        isRunning: false,
      });
    }
  };

  handleReset = () => {
    this.handleStop();
    this.setState({
      elapsedTime: 0,
    });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>Stopwatch</h1>
        <p>Time: {this.state.elapsedTime} seconds</p>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
