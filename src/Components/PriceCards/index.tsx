import React from "react";
import "./style.css";

interface CheckboxProps {
  label: string;
  onChange: (checked: boolean) => void;
  checked?: boolean;
  value?: string;
}

const PriceCard: React.FC<CheckboxProps> = ({
  label,
  onChange,
  checked,
  value,
}) => {
  return (
    <div className="priceCard">
      <label className="priceLabel">
        <input
          id={label}
          type="radio"
          checked={checked}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
          className="priceInput"
          name="budget"
          value={value}
        />
        {label}
      </label>
    </div>
  );
};

export default PriceCard;
