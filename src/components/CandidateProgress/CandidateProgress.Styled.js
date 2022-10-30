import styled from "styled-components";
import { dim } from "../../styles/globalStyles";

export const CandidateProgressStyled = styled.tr`
  border-radius: ${dim._6px};

  display: flex;
  margin: 0 ${dim._20px};
  padding: ${dim._24px} 0 ${dim._24px} ${dim._32px};
  .profile {
    display: flex;
    float: left;
    img {
      height: ${dim._42px};
      width: ${dim._42px};

      border-radius: 50%;
      margin-right: ${dim._12px};
    }
    flex: 1.2;
  }
  .candidateDetail {
    display: flex;
    flex-direction: column;
  }
  .candidatename {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: ${dim._18px};
    line-height: ${dim._20px};

    color: #323232;
  }
  .candidafteRole {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: ${dim._18px};
    line-height: ${dim._18px};

    color: rgba(50, 50, 50, 0.58);
  }
  .progress {
    /* margin: 0 0 0 84px; */
    width: 100%;
  }
  .steps {
    display: flex;

    width: 100%;
  }
  .green {
    width: ${dim._30px};
    height: ${dim._30px};
    border-radius: 50%;
    background-color: #0ed746;
    box-sizing: border-box;
    margin: 0;
  }
  .pending {
    width: ${dim._24px};
    height: ${dim._24px};

    border-radius: 50%;

    background: #ffffff;
    border: ${dim._4px} solid rgba(50, 50, 50, 0.5);
  }
  .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title::after {
    background-color: #0ed746;
  }
  img {
    height: ${dim._42px};
    width: ${dim._42px};

    border-radius: 50%;
    margin-right: ${dim._12px};
    margin: 0;
  }
  .finalstep {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: ${dim._26px};
    line-height: ${dim._36px};
    margin: 0;
    color: #323232;
  }
  .second {
    float: right;
    margin: 0;
  }
  .final {
    float: right;
    margin: 0;
  }
  .finalFinish {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: ${dim._26px};
    line-height: ${dim._36px};
    margin: 0;
    color: #0ed746;
  }

  @media (max-width: 800px) {
    .steps {
      height: ${dim._scale(600)};

      flex-direction: column;
      align-content: center;
      align-items: center;
    }
  }
`;
