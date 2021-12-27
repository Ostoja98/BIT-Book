import React, { useState, useEffect } from "react";
import "./DetailsPage.scss";
import ModalDetails from "../../Component/ModalDetails/ModalDetails";
import ReportRow from "../../Component/ReportRow/ReportRow";
import { useParams } from "react-router-dom";
import ModalLog from "../../Component/ModalLog/ModalLog";

const DetailsPage = (props) => {
  // const [candidate, setCandidate] = useState();
  useEffect(() => {
    props.setShowModal(false);
  }, []);
  let { id } = useParams();

  let candidate = props.fetchResults[1].find((e) => {
    return e.id == id;
  });
  if (candidate)
    return (
      <>
        {props.showLog && (
          <ModalLog
            isLogin={props.isLogin}
            setIsLogin={props.setIsLogin}
            setShowLog={props.setShowLog}
            showLog={props.showLog}
            clickedButton={props.clickedButton}
          />
        )}

        <div className="CandidateCardContainer">
          {props.showModal && (
            <ModalDetails
              fetchResults={props.fetchResults}
              candidate={candidate}
              setShowModal={props.setShowModal}
              pickedElement={props.pickedElement}
            />
          )}

          <div className="CandidateCards">
            <div className="Candidateimage">
              <img src={candidate.avatar} alt="pera" />
            </div>

            <div className="Candidateinfo">
              <div> {candidate.name} </div>
              <div> </div>
            </div>
          </div>
          <div className="CandidateTable">
            <h1>report</h1>

            <table>
              <tr>
                <th>Company</th>
                <th>Interview Date</th>
                <th>Status</th>
              </tr>
              {props.fetchResults[2]
                .filter((e) => {
                  return e.candidateId === candidate.id;
                })
                .map((e) => (
                  <ReportRow
                    e={e}
                    setShowModal={props.setShowModal}
                    showModal={props.showModal}
                    setPickedElement={props.setPickedElement}
                  />
                ))}
            </table>
          </div>
        </div>
      </>
    );
  else return null;
};

export default DetailsPage;
