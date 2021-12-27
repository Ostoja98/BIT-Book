import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <div className="Header">
      <h1>bit</h1>
      <div>
        {!(props.isLogin == "undefined" || props.isLogin == null) ? (
          <button
            onClick={() => {
              props.setIsLogin(null);
              localStorage.clear();
            }}
          >
            Logout
          </button>
        ) : (
          <button onClick={() => props.setShowLog(true)}>LogIn</button>
        )}
      </div>
    </div>
  );
};

export default Header;
