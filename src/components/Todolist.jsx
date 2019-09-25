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
      handlingRedoTask,
      clearCompleted
    } = this.props;

    return (
      <div>
        <div className="div-todolist text-center">
          <h3 className="text-capitalize text-center">Todo list</h3>
          <ul className="list-group m-4">
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
          </ul>
          <button
            className="btn btn-danger text-captalize my-2 "
            onClick={clearTask}
          >
            Reset To-Do
          </button>
        </div>
        <div className="div-completedtask text-center my-3">
          <h1>Completed Tasks</h1>
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
          <label>you have succesfully completd the tasks</label>
          <div>
            <button className="btn btn-danger m-2" onClick={clearCompleted}>
              Reset Completed
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default todolist;
