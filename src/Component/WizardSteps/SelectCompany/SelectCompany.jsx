import React from "react";
import "./SelectCompany.scss";
import ReportCompany from "../../ReportCompany/ReportCompany";
const SelectCompany = (props) => {
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

      <div className="SelectCompany">
        {props.fetchResults[0]
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
              <ReportCompany
                e={e}
                setSelectedCompany={props.setSelectedCompany}
              />
            );
          })}
        <button
          onClick={() => {
            props.setSearchWiz("");
            props.setPageWiz(props.pageWiz - 1);
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            props.setSearchWiz("");
            props.setPageWiz(props.pageWiz + 1);
          }}
          disabled={props.selectedCompany === ""}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SelectCompany;
