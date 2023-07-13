import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../main";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  const profileImg = "https://cdn-icons-png.flaticon.com/128/1077/1077063.png";
  const homeImg = "https://cdn-icons-png.flaticon.com/128/1946/1946488.png";

  const imgClickHandler = () => {
    if (location.pathname === "/") {
      isAuth ? navigate("/me") : navigate("/sign-in");
    } else {
      navigate("/");
    }
  };

  return (
    <nav>
      <p>To - Do App</p>

      <img
        src={location.pathname === "/" ? profileImg : homeImg}
        alt=""
        onClick={imgClickHandler}
      />
    </nav>
  );
}
export default Header;
