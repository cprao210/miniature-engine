import styled from "styled-components";
import { dim } from "../../styles/globalStyles";

export const CandidateTableStyled = styled.div`
  .tableHead {
    background-color: #0ed746;
  }
  .tableHeader {
    background-color: #f6f8fa;
    border: ${dim._1px} solid #e1e4e8;
    width: 80%;
    margin: 0 auto;
    border-bottom: none;
    border-radius: ${dim._4px} ${dim._4px} 0 0;
    position: relative;
    display: flex;
    flex-direction: row;
    cursor: ponter;
    align-items: center;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: ${dim._20px};
    line-height: ${dim._22px};
    text-align: center;

    color: #323232;
    justify-content: space-between;
    padding: ${dim._30px} 0 ${dim._14px};
  }
  .first {
    flex: 1.2;
  }
  .second {
    flex: 1;
  }
  .containerWrapper {
    border: ${dim._1px} solid #ffffff;
    border-collapse: collapse;
    border-top: none;
    margin-top: ${dim._20px};
    background: #fff;
    width: 80%;
    margin: 0 auto;
    tr:nth-child(even) {
      background: #f8f9fa;
    }
    margin-bottom: ${dim._40px};
    border-radius: 0 0 ${dim._6px} ${dim._6px};
  }
  .container {
    background-color: #f9f9fa;
  }
  @media (max-width: 800px) {
    .hide {
      display: none;
    }
  }
`;
