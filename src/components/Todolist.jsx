import React, { Component } from "react";
import heading from "./heading";
class todolist extends Component {
  state = {};
  render() {
    return (
      <div>
        <heading />
        <label>TODo List </label>
        <span className="m-2 badge badge-Primary">
          Todo List: {this.state.task}
        </span>
      </div>
    );
  }
}

export default todolist;
