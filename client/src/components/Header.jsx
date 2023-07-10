import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/App.css";

function Header() {
  const location = useLocation();
  const profileImg = "https://cdn-icons-png.flaticon.com/128/1077/1077063.png";
  const homeImg = "https://cdn-icons-png.flaticon.com/128/1946/1946488.png";

  const pageName = (location) => {
    var path = location.pathname;
    switch (path) {
      case "/":
        return "To-Do List";
      case "/me":
        return "Profile";
      case "/sign-in":
        return "Sign In";
      case "/sign-up":
        return "Sign Up";
      default:
        return "";
    }
  };

  return (
    <nav>
      <p>{pageName(location)}</p>
      <img src={location.pathname === "/" ? profileImg : homeImg} alt="" />
    </nav>
  );
}
export default Header;
