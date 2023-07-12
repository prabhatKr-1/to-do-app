import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [verifyPassword, setVerifyPassword] = useState(""); 

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        {
          name,
          email,
          password,
          verifyPassword,
        }
      );
      if (data.success) {
        toast.success(data.message); 
        navigate("/sign-in");
      } else {
        toast.error(data.message); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter Your Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
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
          name="password"
          value={password}
          placeholder="Create Your Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="verifyPassword"
          value={verifyPassword}
          placeholder="Verify Password"
          required
          onChange={(e) => setVerifyPassword(e.target.value)}
        />
        <input type="submit" value="Sign Up" />

        <p>
          Have an account?
          <Link to="/sign-in">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
