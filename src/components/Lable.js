import React, { Component } from "react";

class Lable extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <span> You clicked {this.state.count} times</span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {"click here"}
        </button>
      </div>
    );
  }
}

export default Lable;
