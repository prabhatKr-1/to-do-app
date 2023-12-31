import React, { useState, useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/SignIn.css";
import { AuthContext } from "../main";

function SignIn() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      return navigate("/");
    }
  }, [isAuth, navigate]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://todoapp-2nj3.onrender.com/api/v1/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        toast.success(data.message);
        setIsAuth(true);
      } else {
        toast.error(data.message);
        setIsAuth(false);
      }
    } catch (error) {
      toast(error.response.data.message);
      setIsAuth(false);
    }
  };

  return (
    <div className="sign-in">
      <form className="login-form" onSubmit={submitHandler}>
        <h1>Sign In</h1>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Sign In" />
        <h3>
          <span style={{ margin: 10, fontWeight: "normal" }}>New Here?</span>
          <span>
            <Link to="/sign-up">Sign Up</Link>
          </span>
        </h3>
      </form>
    </div>
  );
}

export default SignIn;
