import React, { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import ContactDetails from "./Components/Forms/ContactDetails";
import OurServices from "./Components/Forms/OurServices";
import ProgressBar from "./Components/ProgressBar";
import Button from "./Components/Button";
import PriceDetails from "./Components/Forms/PriceDetails";
import SubmitDetails from "./Components/Forms/SubmitDetails";
import { useSelector } from "react-redux";
import { RootState } from "./store/types";
import Footer from "./Components/Footer";

function App() {
  const [step, setStep] = useState<number>(1);

  const [formValid, setFormValid] = useState<boolean>(false);
  const formData = useSelector((state: RootState) => state.form);
  const [isNext, setIsNext] = useState<boolean>(false);

  const nextStepHandler = () => {
    setIsNext(true);
  };

  return (
    <div className="App">
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
          {step == 4 && <SubmitDetails />}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {step !== 1 && (
            <button
              className="common-button"
              onClick={() => {
                setStep((prev) => prev - 1);
              }}
            >
              Previous Step
            </button>
          )}
          {step !== 4 && (
            <Button
              style={{ justifyContent: "flex-end" }}
              text="Next Step"
              onClick={nextStepHandler}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
