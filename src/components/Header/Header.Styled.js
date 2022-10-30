import styled from "styled-components";
import { dim } from "../../styles/globalStyles";

export const HeaderStyled = styled.div`
  background-color: #0ed746;
  .header {
    margin: 0 auto;
    width: 80%;
  }
  .heading {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: ${dim._40px};
    line-height: ${dim._46px};
    /* identical to box height */

    color: #ffffff;
    padding: ${dim._66px} 0 ${dim._56px};
  }
  .search {
    width: ${dim._scale(350)};
    font-size: ${dim._20px};
    background: #ffffff;
    border: ${dim._1px} solid rgba(50, 50, 50, 0.3);
    border-radius: 0px ${dim._6px} ${dim._6px} 0px;
    margin-bottom: ${dim._74px};
    padding: ${dim._12px} ${dim._18px};
  }
`;
