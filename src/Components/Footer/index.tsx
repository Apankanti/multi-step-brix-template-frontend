import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logoImage from "../images/logo-brix-templates.svg";
import "./style.css";
import { RootState } from "../../store/types";
import FooterInput from "./FooterInput";

const Footer: React.FC = () => {
  const userEmail = useSelector((state: RootState) => state.form.email);
  const [fEmail, setFEmail] = useState<string>("");

  useEffect(() => {
    // Set fEmail to userEmail if available, otherwise, set it to an empty string
    setFEmail(userEmail);
  }, [userEmail]);

  const onClickHandler = () => {
    if (
      fEmail.trim() !== "" &&
      fEmail.trim().includes("@") &&
      fEmail.trim().includes(".")
    ) {
      alert(fEmail + " Email Submitted !");
    } else {
      alert("Email Not Valid");
    }
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logoImage} alt="logo-image" height={25} />
        <p>Copyright © 2021 BRIX Templates | All Rights Reserved</p>
      </div>
      <div style={{ width: "350px" }}>
        <FooterInput
          type="email"
          placeholder="Enter Your Email"
          buttonTrue="true"
          image=""
          buttonText="Subscribe"
          value={fEmail} // Pass fEmail as a prop
          onChange={(value: string) => {
            setFEmail(value);
          }}
          onClick={onClickHandler}
        />
      </div>
    </div>
  );
};

export default Footer;
