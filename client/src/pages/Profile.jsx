import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../main";
import { toast } from "react-hot-toast";
import axios from "axios";

function Profile() {
  const { user, isAuth, setIsAuth, totalTasks,completedTasks } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await axios.get("http://localhost:5000/api/v1/user/logout", {
        withCredentials: true,
      });
      toast.success("Logged Out Successfully");
      setIsAuth(false);
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
      setIsAuth(true);
    }
  };
  return (
    <>
      <h1>Welcome {user.name}</h1>
      <div className="info">
        <div className="total">Total Tasks: {totalTasks}</div>
        <div className="completed">Completed Tasks: { completedTasks}</div>
      </div>
      <button onClick={logoutHandler}>LogOut</button>
    </>
  );
}

export default Profile;
