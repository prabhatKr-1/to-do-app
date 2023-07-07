import React from "react";

function Home() {
  return (
    <div>
      <form action="" method="post">
        <input
          type="text"
          name="taskName"
          id=""
          placeholder="Enter Task Name"
        />
        <input
          type="text"
          name="task"
          id=""
          placeholder="Enter Task Description"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default Home;
