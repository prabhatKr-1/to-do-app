import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/App.css";

function Header() {
  const location = useLocation();
  const profileImg = "https://cdn-icons-png.flaticon.com/128/1077/1077063.png";
  const homeImg = "https://cdn-icons-png.flaticon.com/128/1946/1946488.png";

  return (
    <nav>
      <p>Home</p>
      <img src={location.pathname === "/" ? profileImg : homeImg} alt="" />
    </nav>
  );
}
export default Header;
