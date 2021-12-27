import React from "react";
import "./ModalDetails.scss";

const ModalDetails = (props) => {
  return (
    <div className="ModalContainer">
      <div className="ModalDetails">
        <div className="nameModal">
          <h2>Modal Details</h2>
          <button onClick={() => props.setShowModal(false)}>X</button>
        </div>

        <div className="details">
          <p>Company</p>
          <h3>{props.pickedElement.companyName}</h3>
          <p>Interview Date</p>
          <h3>{props.pickedElement.interviewDate}</h3>
          <p>Phase</p>
          <h3>{props.pickedElement.phase}</h3>
          <p>Status</p>
          <h3>{props.pickedElement.status}</h3>
        </div>
        <div className="notes">
          <h6>Notes</h6>
          <p>{props.pickedElement.note}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
