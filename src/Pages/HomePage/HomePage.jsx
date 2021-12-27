import React, { useState } from "react";
import "./HomePage.scss";
import CandidateCard from "../../Component/CandidateCard/CandidateCard";
import ModalLog from "../../Component/ModalLog/ModalLog";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const [searchHome, setSearchHome] = useState("");
  return (
    <div>
      {props.showLog && (
        <ModalLog
          setShowLog={props.setShowLog}
          showLog={props.showLog}
          isLogin={props.isLogin}
          setIsLogin={props.setIsLogin}
          clickedButton={props.clickedButton}
        />
      )}

      <div className="subtitle">
        <h2>Candidates</h2>

        <input
          type="text"
          placeholder="Search"
          name="search"
          onChange={(e) => setSearchHome(e.target.value)}
        ></input>
      </div>
      <div className="CardList">
        {props.fetchResults[1]
          .filter((e) => {
            if (searchHome == "") {
              return e;
            } else if (
              e.name.toLowerCase().includes(searchHome.toLowerCase())
            ) {
              return e;
            }
          })
          .map((e, i) => {
            return (
              <Link to={`/detailsPage/${e.id}`}>
                <CandidateCard fetchResults={props.fetchResults} e={e} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
