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
      handlecompletedTask,
      completed,
      handlingRedoTask
    } = this.props;

    return (
      <div>
        <ul className="list-group my-10">
          <h3 className="text-capitalize text-center">Todo list</h3>
          {tasks.map(task => {
            return (
              <DisplayItem
                key={task.id}
                id={task.id}
                content={task.content}
                editTask={editTask}
                deleteTask={deleteTask}
                handlecompletedTask={handlecompletedTask}
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
          <h1>Done</h1>
          <label>you have succesfully completd the task</label>
          {completed.map(completedTask => {
            return (
              <Completed
                key={completedTask.id}
                id={completedTask.id}
                completedTask={completedTask.content}
                handlingRedoTask={handlingRedoTask}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default todolist;
