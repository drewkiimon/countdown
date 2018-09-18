import React, { Component } from "react";
import "./Clock.css";

import _ from "lodash";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      active: false
    };
    // Use debounce to wait for user to stop typing input
    this.countdownFrom = _.debounce(this.countdownFrom.bind(this), 500);
  }

  countdownFrom(value) {
    for (var i = 0; i <= value; i++) {
      let input = value - i;
      this.timerHelper(input, i);
    }
    this.setState({ active: true });
  }

  timerHelper(value, i) {
    var timer = setTimeout(() => {
      this.setState({ value });
    }, i * 1000);
  }

  congratulations() {
    this.setState({ value: "All Done!", active: false });
  }

  componentDidUpdate(prevProps) {
    // Cannot start new countdown until current countdown finishes
    if (
      this.props.countdown !== prevProps.countdown &&
      this.props.countdown.length > 0 &&
      !this.state.active
    ) {
      this.countdownFrom(this.props.countdown);
    }
    // All done
    if (this.state.value === 0) {
      this.congratulations();
    }
  }

  render() {
    var { countdown } = this.props;
    return <div className="countdown">{this.state.value}</div>;
  }
}

export default Clock;
