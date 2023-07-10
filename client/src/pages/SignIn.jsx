import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => { 
    e.preventDefault();
    try {
      const { data } =await axios.post(
        "http://localhost:5000/api/v1/user/login",
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
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={submitHandler}>
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

        <p>
          New Here?
          <Link to="/sign-up">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
