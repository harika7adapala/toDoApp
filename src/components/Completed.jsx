import React from "react";

function completedTask({ completedTask, handlingRedoTask, id }) {
  function handleRedoButton(evt) {
    evt.preventDefault();
    handlingRedoTask(id);
  }
  return (
    <div>
      <ul className="list-group my-2">
        <li className="list-group-item list-group-item-action list-group-item-primary d-flex justify-content-between">
          <h6>{completedTask}</h6>
          <button className="btn btn-dark" onClick={handleRedoButton}>
            <i className="material-icons">redo</i>Redo Task
          </button>
        </li>
      </ul>
    </div>
  );
}

export default completedTask;
