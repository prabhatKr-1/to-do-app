import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../main";
import { toast } from "react-hot-toast";
import axios from "axios";

function Profile() {
  const { user, isAuth, setIsAuth } = useContext(AuthContext);
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
    }
  };

  return (
    <>
      <h1>Welcome {user.name}</h1>
      <h1>Your Email is: {user.email}</h1>
      <button onClick={logoutHandler}>LogOut</button>
    </>
  );
}

export default Profile;
