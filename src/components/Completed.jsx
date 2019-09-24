import React, { Component } from "react";

class completedTask extends Component {
  render() {
    const { completedTask } = this.props;
    return (
      <div>
        <ul className="list-group my-2">
          <li className="list-group-item list-group-item-action list-group-item-primary d-flex justify-content-center">
            <h6>{completedTask}</h6>
          </li>
        </ul>
      </div>
    );
  }
}

export default completedTask;
