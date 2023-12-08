import React from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

import submitImg from "../images/blue-right.svg";
import "./style.css";
import Button from "../Button/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types";
import { setFormData } from "../../store/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SubmitProps {
  setFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  isNext: boolean;
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SubmitDetails: React.FC<SubmitProps> = ({
  setFormValid,
  isNext,
  setIsNext,
  setStep,
}) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);
const navigate = useNavigate();

  const submitButtonHandler = async () => {
    try {
      const apiUrl: string = "http://localhost:3001/user/create";

      const headers = {
        "Content-Type": "application/json",
      };

      const apiFormData = {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        companyName: formData.companyName,
        selectedService: formData.selectedService,
        projectBudget: formData.projectBudget,
        created_at: new Date().toISOString(),
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        // headers: headers,
        body: JSON.stringify(apiFormData),
      });

      if (response.ok) {
        console.log("Response :", apiFormData);
        alert("Data submitted successful");
        setFormValid(true);
        setIsNext(true);
        setIsNext(true);
        setStep(5);
        navigate("/show-details"); // Redirect to ShowDetails
      } else {
        toast.error("API call failed");
        setStep(4);
      }
    } catch (error) {
      toast.error("Error making API call");
    }
    dispatch(setFormData(formData));
  };

  return (
    <div className="form4">
      <ToastContainer />
      <div className="submitDetails">
        <img src={submitImg} alt="" width={100} />
        <div className="textclass">
          <h2>Submit your quote request</h2>
          <p>
            Please review all the information you previously typed in the past
            steps, and if all is okay, submit your message to receive a project
            quote in 24 - 48 hours.
          </p>
        </div>
        <Button text="Submit" onClick={submitButtonHandler}></Button>
      </div>
    </div>
  );
};

export default SubmitDetails;
