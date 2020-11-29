import React from "react";

function TodoItem() {
  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div>#1</div>
        <div className="col">
            <h4>ToDo Title</h4>
        </div>
        <button className="btn btn-primary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
