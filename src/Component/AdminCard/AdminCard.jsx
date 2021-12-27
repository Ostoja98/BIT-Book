import React, { useEffect } from "react";
import "./AdminCard.scss";
import moment from "moment";

const AdminCard = (props) => {
  return (
    <div className="AdminCard">
      <div className="ReportCard">
        <div className="name">{props.e.companyName}</div>
        <div className="name">{props.e.candidateName}</div>
        <div className="date">
          {moment(props.e.interviewDate).format("DD-MMM-YYYY")}
        </div>
        <div className="status">{props.e.status}</div>
        <div className="button">
          <button
            onClick={() => {
              props.setPickedElement(props.e);
              props.setShowModal(true);
            }}
          >
            OKO
          </button>
          <button
            onClick={() => {
              fetch(`http://localhost:3333/api/reports/${props.e.id}`, {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
                // body: JSON.stringify(props.e),
              }).then((res) => {
                console.log(res);
                // console.log(token);
                props.setReload(!props.reload);
              });
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
