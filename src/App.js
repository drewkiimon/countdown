import React, { Component } from "react";
import "./App.css";

// Custom Component
import Clock from "./components/Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var value = e.target.value;
    this.setState({ value });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="center">
          <input
            className="enterHere"
            onChange={this.handleChange}
            placeholder="Enter countdown from here"
            value={this.state.value}
            type="number"
          />
          <Clock countdown={this.state.value} />
        </div>
      </div>
    );
  }
}

export default App;
