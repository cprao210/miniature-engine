import React from "react";
import CandidateProgress from "../CandidateProgress";
import { CandidateTableStyled } from "./CandidateTable.Styled";

const CandidateTable = ({ searchResults }) => {
  return (
    <CandidateTableStyled>
      <div className="tableHead">
        <div className="tableHeader">
          <th className="first">Candidate</th>
          <th className="second hide">Referred</th>
          <th className="second hide">Interviewed</th>
          <th className="second hide">Hired</th>
          <th className="second hide">Joined</th>
          <th className="second hide">Reward</th>
        </div>
      </div>
      <div className="container">
        <div className="containerWrapper">
          {searchResults.length === 0 ? (
            <div style={{ margin: "0 auto", width: "104px" }}>
              no data availablr
            </div>
          ) : (
            searchResults.map((d, i) => <CandidateProgress data={d} />)
          )}
        </div>
      </div>
    </CandidateTableStyled>
  );
};

export default CandidateTable;
