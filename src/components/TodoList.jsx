import React, { Component } from "react";
import DisplayItem from "./DisplayItem";
import Completed from "./Completed";

class todolist extends Component {
  render() {
    const { tasks, clearTask, deleteTask, editTask } = this.props;

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
