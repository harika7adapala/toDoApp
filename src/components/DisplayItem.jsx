import React from "react";

function displayItem({ content, deleteTask, editTask, id }) {
  function handleEditButtonClick(evt) {
    evt.preventDefault();
    editTask(id);
  }
  function deletebutton(evt) {
    evt.preventDefault();
    deleteTask(id);
  }

  return (
    <li className="list-group-item list-group-item-action list-group-item-dark d-flex justify-content-between">
      <h6>{content}</h6>
      <div className="todo-icon">
        <button className="btn btn-danger" onClick={deletebutton}>
          <i className="material-icons">delete</i>
        </button>

        <button className="btn btn-info " onClick={handleEditButtonClick}>
          edit
          <i className="material-icons ">mode_edit</i>
        </button>
      </div>
    </li>
  );
}

export default displayItem;
