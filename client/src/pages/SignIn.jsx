import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input type="password" name="" id="" placeholder="Password" required />
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
