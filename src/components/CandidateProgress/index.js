import React, { useEffect, useState } from "react";
import { CandidateProgressStyled } from "./CandidateProgress.Styled";
import "antd/dist/antd.css";
import { Steps } from "antd";

const CandidateProgress = ({ data }) => {
  const { Step } = Steps;
  const [direction, setDirection] = useState(
    window.innerWidth < 800 ? "vertical" : "horizontal"
  );
  console.log(data);

  window.onresize = () => {
    setDirection(window.innerWidth < 800 ? "vertical" : "horizontal");
  };

  return (
    <CandidateProgressStyled>
      <div className="progress">
        <Steps className="steps" direction={direction}>
          <div className="profile">
            <img
              src={`${process.env.PUBLIC_URL}/assets/male_avatar.svg`}
              alt=""
            />
            <div className="candidateDetail">
              <div className="candidatename">{data.name}</div>
              <div className="candidafteRole">{data.role}</div>
            </div>
          </div>
          {data.status.map((d, i, arr) => {
            console.log(d);
            if (d === "finish" && i !== arr.length - 1) {
              return (
                <Step
                  status="finish second"
                  className="Step"
                  title={direction === "vertical" ? "Referred" : ""}
                  icon={<p className="green"></p>}
                />
              );
            } else if (d === "process" && i !== arr.length - 1) {
              return (
                <Step
                  status="process second"
                  title={direction === "vertical" ? "Hired" : ""}
                  icon={
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/male_avatar.svg`}
                      alt=""
                    />
                  }
                />
              );
            } else if (d === "wait" && i !== arr.length - 1) {
              return (
                <Step
                  status="wait second"
                  title={direction === "vertical" ? "Joined" : ""}
                  icon={<p className="pending"></p>}
                />
              );
            } else if (d === "finish" && i === arr.length - 1) {
              return (
                <Step
                  status="wait  final"
                  title={direction === "vertical" ? "Reward" : ""}
                  icon={<p className="finalFinish"> $ 2000</p>}
                />
              );
            } else {
              return (
                <Step
                  status="wait  final"
                  title={direction === "vertical" ? "Reward" : ""}
                  icon={<p className="finalstep"> $ 2000</p>}
                />
              );
            }
          })}

          {/* <Step
            status="finish second"
            // title={direction === "vertical" ? "Interviewed" : ""}
            icon={<p className="green"></p>}
          />
         
          <Step
            status="wait second"
            // title={direction === "vertical" ? "Joined" : ""}
            icon={<p className="pending"></p>}
          /> */}
        </Steps>
      </div>
    </CandidateProgressStyled>
  );
};

export default CandidateProgress;
