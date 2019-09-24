import React, { Component } from "react";

import Completed from "./Completed";
import DisplayItem from "./DisplayItem";

class todolist extends Component {
  render() {
    const { tasks, clearTask, deleteTask, editTask } = this.props;

    return (
      <div>
        <ul className="list-group my-5 ">
          <h3 className="text-capitalize">Todo list</h3>
          {t