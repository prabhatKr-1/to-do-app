import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../main";
import toast from "react-hot-toast";
import axios from "axios";
import "../styles/Profile.css";

function Profile() {
  const { user, isAuth, setIsAuth, totalTasks, completedTasks } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await axios.get("https://todoapp-2nj3.onrender.com/api/v1/user/logout", {
        withCredentials: true,
      });
      toast.success("Logged Out Successfully");
      setIsAuth(false);
      navigate("/sign-in");
    } catch (error) {
      toast(error.response.data.message);
      setIsAuth(true);
    }
  };
  return (
    <>
      <h1 className="user-welcome">Welcome {user.name}</h1>
      <div className="info">
        <div className="total">
          <span>Total Tasks:</span>
          <span className="value">{totalTasks}</span>
        </div>
        <div className="completed">
          <span>Completed Tasks:</span>
          <span className="value">{completedTasks}</span>
        </div>
      </div>
      <button className="logout-btn user-welcome" onClick={logoutHandler}>
        <h1>LogOut</h1>
      </button>
    </>
  );
}

export default Profile;
