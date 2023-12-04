import React from "react";
import "./style.css";
import Button from "../Button";

interface FooterInputProps {
  type: string;
  placeholder: string;
  image?: string;
  buttonTrue?: string;
  buttonText?: string;
  onChange: Function;
  onClick?: () => void;
  value?: string;
}

const FooterInput: React.FC<FooterInputProps> = ({
  value,
  onClick,
  type,
  placeholder,
  image,
  buttonTrue,
  buttonText = "DefaultText",
  onChange,
}) => {
  return (
    <div className="FooterInput">
      <div className="input-container">
        <input
          type={type}
          placeholder={placeholder}
          className="foooterInput__box"
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={value}
        />
        {image !== "" && (
          <img src={image} alt="input-image" className="input-image" />
        )}
        {buttonTrue === "true" && (
          <Button className="footer-btn" text={buttonText} onClick={onClick} />
        )}
      </div>
    </div>
  );
};

export default FooterInput;
