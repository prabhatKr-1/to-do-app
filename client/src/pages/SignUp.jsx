import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  return (
    <div>
      <form action="" method="post">
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
