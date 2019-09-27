import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class heading extends Component {
  constructor() {
    super();
    this.state = { add: "" };
    // this.event = this.event.bind(this);
  }
  addText = todo => {
    this.setState({ add: todo.target.value });
  };
  showText = () => {
    //document.getElementById("task").innerText = this.state.add;
    this.setState({ task: this.state.add });
  };

  render() {
    return (
      <div>
        <form>
          <header>
            <h1>Tasker</h1>
          </header>
          <label className="m-4">Things to do: </label>

          <input
            type="Text"
            name="addTodo"
            // value={this.state.add}
            onChange={this.addText}
          ></input>
          <button
            className={this.nullWarning()}
            name="addbutton"
            type="button"
            onClick={this.showText}
          >
            ADD
          </button>

          <span id="task" className="m-2">
            Task todo : {this.state.task}
          </span>
        </form>
        {/* <h3 style={{ fontSize: 20 }}>Todo Item: {this.state.add}</h3> */}
      </div>
    );
  }
  // taskEntrie() {
  //   let { add } = this.state;
  //   return add;
  // }
  nullWarning() {
    let addWarning = "btn m-2 btn-";
    addWarning += this.state.add === "" ? "warning" : "success";
    return addWarning;
  }
}

export default heading;
