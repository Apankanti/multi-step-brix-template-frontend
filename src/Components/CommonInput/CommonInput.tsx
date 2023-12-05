import React from "react";
import "./style.css";
import Button from "../Button";

interface CommonInputProps {
  type: string;
  placeholder: string;
  image?: string;
  buttonTrue?: string;
  buttonText?: string;
  onChange: Function;
  onClick?: () => void;
  value?: string;
}

const CommonInput: React.FC<CommonInputProps> = ({
  type,
  value,
  onClick,
  placeholder,
  image,
  buttonTrue,
  buttonText = "DefaultText",
  onChange,
}) => {
  return (
    <div className="input">
      <input
        type={type}
        placeholder={placeholder}
        className="input__box"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      />
      {image != "" && (
        <img src={image} alt="input-image" className="input-image" />
      )}
      {buttonTrue == "true" && (
        <div
          className="input-image"
          style={{ marginRight: "70px", marginTop: "10px" }}
        >
          <Button text={buttonText} onClick={onClick} />
        </div>
      )}
    </div>
  );
};

export default CommonInput;
