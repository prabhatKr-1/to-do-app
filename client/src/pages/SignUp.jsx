import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <form action="" method="post">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter Your Name"
          required
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Create Your Password"
          required
        />
        <input
          type="password"
          name="verifyPassword"
          id=""
          placeholder="Verify Password"
          required
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
