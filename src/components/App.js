'use strict';
import React from 'react';
import Field from './Field';
import Controller from './Controller';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRunning: false
    };

    this.next = this.next.bind(this);
    this.toggle = this.toggle.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  next() {
    this.props.gameOfLife.next();
  }

  toggle(x, y) {
    this.props.gameOfLife.toggleCell(x, y);
  }

  start() {
    this.timerId = setInterval(this.next, 100);
    this.setState({isRunning: true});
  }

  stop() {
    clearInterval(this.timerId);
    this.setState({isRunning: false});
  }

  render() {
    return (
      <div>
        <Field
          matrix={this.props.gameOfLife.matrix}
          onClick={this.toggle} />
        <Controller
          isRunning={this.state.isRunning}
          onClickNext={this.next}
          onClickStart={this.start}
          onClickStop={this.stop} />
      </div>
    );
  }
}
