import React, { useEffect, useState } from "react";

import "./style.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import { setFormData } from "../../store/actions";
import PriceCard from "../PriceCards";

interface PriceDetailsProps {
  setFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  isNext: boolean;
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const PriceDetails: React.FC<PriceDetailsProps> = ({
  setFormValid,
  isNext,
  setIsNext,
  setStep,
}) => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);
  const [projectBudget, setProjectBudget] = useState<string>(
    form.projectBudget
  );
  const [budgetError, setBudgetError] = useState<string>("");

  useEffect(() => {
    if (isNext) {
      if (projectBudget !== "") {
        dispatch(setFormData({ ...form, projectBudget }));
        setFormValid(true);
        setStep(4);
        setIsNext(false);
      } else {
        setBudgetError("Selecting Budget is Mandatory");
        setIsNext(false);
      }
    }
  }, [isNext]);

  return (
    <div className="common">
      <div className="form-head-text">
        <h2>What’s your project budget?</h2>
        <p>Please select the project budget range you have in mind.</p>
      </div>
      <div className="">
        <div className="card-container">
          <PriceCard
            label="$5.000 - $10.000"
            onChange={() => {
              setProjectBudget("$5.000 - $10.000");
            }}
            checked={projectBudget === "$5.000 - $10.000"}
          />
          <PriceCard
            label="$10.000 - 20.000"
            onChange={() => {
              setProjectBudget("$10.000 - 20.000");
            }}
            checked={projectBudget === "$10.000 - 20.000"}
          />
          <PriceCard
            label="$20.000 - 50.000"
            onChange={() => {
              setProjectBudget("$20.000 - 50.000");
            }}
            checked={projectBudget === "$20.000 - 50.000"}
          />
          <PriceCard
            label="$50.000 +"
            onChange={() => {
              setProjectBudget("$50.000 +");
            }}
            checked={projectBudget === "$50.000 +"}
          />
        </div>
      </div>
      <div className="error-message">{budgetError}</div>
    </div>
  );
};

export default PriceDetails;
