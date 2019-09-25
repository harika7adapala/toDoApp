import React from "react";

function displayItem({
  content,
  deleteTask,
  editTask,
  id,
  handlecompletedTask
}) {
  function handleEditButtonClick(evt) {
    evt.preventDefault();
    editTask(id);
  }
  function deletebutton(evt) {
    evt.preventDefault();
    deleteTask(id);
  }
  function completedButton(evt) {
    evt.preventDefault();
    handlecompletedTask(id);
  }

  return (
    <li className="list-group-item list-group-item-action list-group-item-dark d-flex justify-content-between">
      <h6>{content}</h6>
      <div className="todo-icon">
        <span className="btn btn-danger" onClick={deletebutton}>
          <i className="material-icons">delete</i>
        </span>

        <button className="btn btn-info " onClick={handleEditButtonClick}>
          <i className="material-icons ">mode_edit</i>
        </button>
        <button className="btn btn-primary" onClick={completedButton}>
          Completed
        </button>
      </div>
    </li>
  );
}

export default displayItem;
