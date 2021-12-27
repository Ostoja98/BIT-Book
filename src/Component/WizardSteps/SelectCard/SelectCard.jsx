import React from "react";
import "./SelectCard.scss";
import ReportCard from "../../ReportCard/ReportCard";

const SelectCard = (props) => {
  return (
    <>
      <div className="searchWiz">
        <input
          type="text"
          placeholder="Search"
          name="search"
          onChange={(e) => props.setSearchWiz(e.target.value)}
        ></input>
      </div>
      <div className="SelectCard">
        {props.fetchResults[1]
          .filter((e) => {
            if (props.searchWIz == "") {
              return e;
            } else if (
              e.name.toLowerCase().includes(props.searchWiz.toLowerCase())
            )
              return e;
          })
          .map((e) => {
            return (
              <ReportCard
                setSelectedCandidate={props.setSelectedCandidate}
                e={e}
              />
            );
          })}
        <button
          onClick={() => {
            props.setSearchWiz("");
            props.setPageWiz(props.pageWiz + 1);
          }}
          disabled={props.selectedCandidate === ""}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SelectCard;
