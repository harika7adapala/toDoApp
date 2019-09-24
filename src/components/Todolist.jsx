import React, { Component } from "react";

import Completed from "./Completed";
import DisplayItem from "./DisplayItem";

class todolist extends Component {
  render() {
    const {
      tasks,
      clearTask,
      deleteTask,
      editTask,
      completedTask
    } = this.props;
    console.log(completedTask);

    return (
      <div>
        <ul className="list-group my-5 ">
          <h3 className="text-capitalize">Todo list</h3>
          {tasks.map(task => {
            return (
              <DisplayItem
                key={task.id}
                id={task.id}
                content={task.content}
                editTask={editTask}
                deleteTask={deleteTask}
                completedTask={completedTask}
              />
            );
          })}
          <button
            className="btn btn-danger text-captalize mt-2"
            onClick={clearTask}
          >
            Reset
          </button>
        </ul>
        <div>
          <Completed />
        </div>
      </div>
    );
  }
}

export default todolist;
