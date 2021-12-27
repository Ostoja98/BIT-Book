import React from "react";
import "./ReportRow.scss";
import moment from "moment";

const ReportRow = (props) => {
  console.log(props.e);
  return (
    <>
      <tr>
        <td>{props.e.companyName}</td>
        <td>{moment(props.e.interviewDate).format("DD-MM-YYYY")}</td>
        <td>{props.e.status}</td>
        <button
          className="oko"
          onClick={() => {
            props.setPickedElement(props.e);
            props.setShowModal(true);
          }}
        >
          oko
        </button>
      </tr>
    </>
  );
};

export default ReportRow;
