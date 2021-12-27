import React, { useState } from "react";
import "./ModalLog.scss";
import { useHistory } from "react-router-dom";

const ModalLog = (props) => {
  const [mail, setMail] = useState("");
  const [pass, setPassword] = useState("");
  const [timesTried, changeTimesTried] = useState(true);

  const close = () => {
    if (!(props.isLogin == "undefined" || props.isLogin == null)) {
      props.setShowLog(false);
    }
  };
  close();
  const history = useHistory();
  return (
    <div className="ModalContainer">
      <div className="ModalLogIn">
        <button
          onClick={() => {
            props.setShowLog(false);
          }}
        >
          X
        </button>
        <h3>LOG IN</h3>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setMail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          onClick={() => {
            fetch("http://localhost:3333/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({ email: mail, password: pass }),
            })
              .then((data) => data.json())
              .then((data) => {
                localStorage.setItem("accessToken", data.accessToken);
                props.setIsLogin(localStorage.getItem("accessToken"));
                history.push("/adminPage");
              });
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default ModalLog;
