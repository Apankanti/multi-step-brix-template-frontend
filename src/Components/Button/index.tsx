import React, { ButtonHTMLAttributes } from "react";
import "./style.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button className="common-button" {...props}>
      {text}
    </button>
  );
};

export default Button;
