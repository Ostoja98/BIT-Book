import moment from "moment";
import React, { useState } from "react";
import "./Fill.scss";
import { useHistory } from "react-router-dom";

const Fill = (props) => {
  const [interviewDate, setInterviewDate] = useState("");
  const [note, setNote] = useState("");
  const [phase, setPhase] = useState("CV");
  const [status, setStatus] = useState("Passed");

  const history = useHistory();

  const token = props.isLogin;
  console.log(token);

  return (
    <div className="Fill">
      <div className="input">
        <label for="phase">
          Date:
          <input
            id="phase"
            required
            type="date"
            onChange={(e) => setInterviewDate(e.target.value)}
            max={moment().format("YYYY-MM-DD")}
          ></input>
        </label>
        <label for="Phase">
          Phase
          <select
            name="Phase"
            id="Phase"
            onChange={(e) => setPhase(e.target.value)}
          >
            <option value="CV">CV</option>
            <option value="HR">HR</option>
            <option value="Technical">Technical</option>
          </select>
        </label>
        <label for="status">
          Status
          <select
            name="status"
            id="status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Passed">Passed</option>
            <option value="Declined">Declined</option>
          </select>
        </label>
      </div>
      <div className="text">
        <label for="notes">
          <textarea
            required
            name=""
            id="notes"
            cols="30"
            rows="10"
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button
            type="button"
            onClick={() => {
              fetch(`http://localhost:3333/api/reports`, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  candidateId: props.selectedCandidate.id,
                  candidateName: props.selectedCandidate.name,
                  companyId: props.selectedCompany.id,
                  companyName: props.selectedCompany.name,
                  interviewDate: interviewDate,
                  note: note,
                  phase: phase,
                  status: status,
                }),
              }).then((res) => {
                console.log(res);
                console.log(token);
                props.setReload(!props.reload);
                history.push("/adminPage");
              });
            }}
          >
            Create
          </button>
        </label>
        <button onClick={() => props.setPageWiz(props.pageWiz - 1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Fill;
