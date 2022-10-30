import React from "react";
import { HeaderStyled } from "./Header.Styled";

const Header = ({ searchTerm, handleChange }) => {
  return (
    <HeaderStyled className="">
      <div className="header">
        <div className="heading">Referral Status</div>
        <div>
          <input
            className="search"
            type="search"
            name=""
            id=""
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
