import React, { Component } from "react";

class completedTask extends Component {
  state = {};
  render() {
    const { completed } = this.props;
    return (
      <div>
        <h1>Done</h1>
        <label>you have succesfully completd the task</label>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action list-group-item-primary d-flex justify-content-center">
            <h6>{completed}</h6>
          </li>
        </ul>
      </div>
    );
  }
}

export default completedTask;
