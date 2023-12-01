import React from "react";
import "./style.css";
import logo from "../images/logo-brix-templates.svg";
import Button from "../Button";

interface HeaderProps {
  // Add any props if needed
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={logo} alt="logo-image" height={30} />
      </div>
      <div><Button text="Clone now" /></div>
    </div>
  );
};

export default Header;
