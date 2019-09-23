import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./TodoList";
import UUID from "uuid";

class MyHeader extends Component {
  state = {
    tasks: [],
    nextId: UUID(),
    input: "",
    editItem: false
  };
  handleInputChange = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    /**
     * type task = {
     *  id: UUID,
     *  content: String,
     *  completed: bool,
     * }
     */

    if (this.state.input === "") {
      alert("todo cannot be empty");
    } else {
      const addTask = {
        id: this.state.nextId,
        content: this.state.input
      };

      const updatedTasks = [...this.state.tasks, addTask];

      this.setState(currentState => {
        return {
          ...currentState,
          tasks: updatedTasks,
          nextId: UUID(),
          input: ""
        };
      });
    }
  };

  nullWarning() {
    let addWarning = "btn m-2 btn-";
    addWarning += this.state.input === "" ? "warning" : "success";
    return addWarning;
  }
  clearTasks = c => {
    c.preventDefault();
    this.setState({
      tasks: []
    });
  };
  deleteTask = id => {
    const filterTask = this.state.tasks.filter(input => input.id !== id);
    this.setState({
      tasks: filterTask
    });
  };
  editTask = id => {
    const filterTask = this.state.tasks.filter(input => input.id !== id);
    const selectedTask = this.state.tasks.find(input => input.id === id);
    console.log(selectedTask);
    this.setState({
      tasks: filterTask,
      input: selectedTask.content,
      id: id,
      editItem: true
    });
  };

  // // emptyInput() {
  // //   if (this.state.content === "") return <alert>Enter some task first</alert>;
  // //   return this.addTodo;
  // }
  render() {
    return (
      <div>
        <form className="text-center">
          <h1>Tasker</h1>

          <label className="m-4">Things to do: </label>

          <input
            type="Text"
            name="addTodo"
            placeholder="Enter your task"
            value={this.state.input}
            onChange={this.handleInputChange}
          ></input>
          <button
            className={this.nullWarning()}
            type="button"
            onClick={this.addTodo}
          >
            Add Task
          </button>

          <TodoList
            tasks={this.state.tasks}
            clearTask={this.clearTasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            editItem={this.editItem}
          />
        </form>
      </div>
    );
  }
}

export default MyHeader;
