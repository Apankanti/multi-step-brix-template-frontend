import React from "react";
import axios from "axios";
import submitImg from "../images/blue-right.svg";
import "./style.css";
import Button from "../Button/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types";
import { setFormData } from "../../store/actions";

interface SubmitProps {}

const SubmitDetails: React.FC<SubmitProps> = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);

  const submitButtonHandler = async () => {
    try {
      // Update the Redux store with the actual form data
      dispatch(
        setFormData({
          name: formData.name,
          email: formData.email,
          number: formData.number,
          companyName: formData.companyName,
          selectedService: formData.selectedService,
          projectBudget: formData.projectBudget,
        })
      );

      // Make an API call using the data from the Redux store
      const response = await axios.post(
        "https://aw-test.free.beeceptor.com/api/v1/lead/save",
        formData
      );

      // Handle the response as needed
      console.log("API Response:", response.data);

      alert("Submit Successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data. Please try again.");
    }
  };

  return (
    <div className="form4">
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
