// ProgressBar.tsx

import React from "react";
import "./style.css";

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep}) => {
  const steps = [1, 2, 3, 4];


  return (
    <div className="progress-bar">
      {steps.map((step) => (
        <div
          key={step}
          className={`step-container ${step === currentStep ? "active" : ""}`}
        >
          <div className={`step ${step === currentStep ? "active" : ""}`}>
            {step}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
