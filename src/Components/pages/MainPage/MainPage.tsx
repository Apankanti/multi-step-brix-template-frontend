import React, { useState } from "react";
import "./style.css"
import { useSelector } from "react-redux";
import { RootState } from "../../../store/types";
import Footer from "../../Footer";
import Button from "../../Button";
import SubmitDetails from "../../SubmitDetails/SubmitDetails";
import OurServices from "../../Forms/OurServices";
import ContactDetails from "../../Forms/ContactDetails";

import Header from "../../Header";
import PriceDetails from "../../Forms/PriceDetails";
import ProgressBar from "../../ProgressBar";


function MainPage() {
  const [step, setStep] = useState<number>(1);

  const [formValid, setFormValid] = useState<boolean>(false);
  const formData = useSelector((state: RootState) => state.form);
  const [isNext, setIsNext] = useState<boolean>(false);

  const nextStepHandler = () => {
    setIsNext(true);
  };

  return (
    <div className="MainPage">
      <Header />
      <div className="main-container">
        <div className="text-container">
          <h2>Get a project quote</h2>
          <p>
            Please fill the form below to receive a quote for your project. Feel
            free to add as much detail as needed.
          </p>
        </div>
        <ProgressBar currentStep={step} />
        <div className="form-container">
          {step == 1 && (
            <ContactDetails
              setFormValid={setFormValid}
              setIsNext={setIsNext}
              isNext={isNext}
              setStep={setStep}
            />
          )}
          {step == 2 && (
            <OurServices
              setFormValid={setFormValid}
              setIsNext={setIsNext}
              isNext={isNext}
              setStep={setStep}
            />
          )}
          {step == 3 && (
            <PriceDetails
              setFormValid={setFormValid}
              setIsNext={setIsNext}
              isNext={isNext}
              setStep={setStep}
            />
          )}
          {step == 4 && (
            <SubmitDetails
              setFormValid={setFormValid}
              setIsNext={setIsNext}
              isNext={isNext}
              setStep={setStep}
            />
          )}
        </div>
        <div className="buttons">
          <div className="navigate-buttons">
            {step !== 1 && (
              <button
                className="prev-button"
                onClick={() => {
                  setStep((prev) => prev - 1);
                }}
              >
                Previous Step
              </button>
            )}
            {step !== 4 && (
              <Button
                style={{ justifyContent: "flex-start" }}
                text="Next Step"
                onClick={nextStepHandler}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
