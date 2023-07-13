import React from "react";
import "../styles/Task.css";

function Task(props) {
  const { taskName, task, _id, isChecked, updateHandler, deleteHandler } =
    props;
  return (
    <div className="task">
      <span className="name">{taskName}</span>
      <span className="disc">{task}</span>
      <input
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={() => updateHandler(_id)}
      />
      <button className="del-btn" onClick={() => deleteHandler(_id)}>
        <img src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png" />
      </button>
    </div>
  );
}

export default Task;
