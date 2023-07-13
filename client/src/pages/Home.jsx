import React, { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../main";
import Task from "../components/Task";
import "../styles/Home.css";

function Home() {
  const { isAuth,setTotalTasks,setCompletedTasks } = useContext(AuthContext);
  const [taskName, setTaskName] = useState("");
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      return navigate("/sign-in");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/tasks/add",
        {
          taskName,
          task,
        },
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setTaskName("");
      setTask("");
      setUpdate(!update);
    } catch (error) {}
  };

  const updateHandler = async (_id) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/v1/tasks/${_id}`,
        {},
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setUpdate(!update);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/v1/tasks/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log(data);
      data.success ? toast.success(data.message) : toast.error(data.message);
      setUpdate(!update);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/tasks/all", {
        withCredentials: true,
      })
      .then((res) => {
        setTaskArray(res.data.tasks);
        setTotalTasks(res.data.tasks.length);
        setCompletedTasks(res.data.tasks.filter((item) => item.isChecked).length);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }, [update, isAuth, setTotalTasks]);

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
            placeholder="Enter Task Name"
          />
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter Task Description"
          />
          <button type="submit">
            <img src="https://cdn-icons-png.flaticon.com/128/3161/3161837.png" />
          </button>
        </form>
      </div>
      <div className="tasks">
        {isAuth &&
          taskArray.map((item) => (
            <Task
              key={item._id}
              _id={item._id}
              taskName={item.taskName}
              task={item.task}
              isChecked={item.isChecked}
              updateHandler={updateHandler}
              deleteHandler={deleteHandler}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
