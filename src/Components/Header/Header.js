import React from "react";
import ekomLogo from "../../assets/ekomLogo.png";
import "./Header.css";

function Header() {
  return (
    <div className="headerWrapper">
      <img className="logo" 
      src={ekomLogo} 
      alt="ekom logo" />
      <div className="type">
        <p>SHIRTS</p>
      </div>
      <div className="gender">
        <p>MALE</p>
      </div>
      <div className="search">SEARCH</div>
      <div className="bag">
        <p>BAG</p>
        <p>3</p>
      </div>
    </div>
  );
}

export default Header;
