import React from "react";
// import axios from "axios";
import submitImg from "../images/blue-right.svg";
import "./style.css";
import Button from "../Button/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types";
import { setFormData } from "../../store/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SubmitProps {}

const SubmitDetails: React.FC<SubmitProps> = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);

  const submitButtonHandler = async () => {
    try {
      const bearerToken: string =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImJvYkBwYWt0b2x1cy5jb20iLCJuYW1laWQiOiJhYTgzOTQyNS00OWU4LTQwNzItOGJlNC0yMDQ5MDU4YzYwOGQiLCJnaXZlbl9uYW1lIjoiQm9iIiwiZmFtaWx5X25hbWUiOiJBbmFzb3JpIiwidXNlcl92aWV3X2FjY2Vzc190eXBlIjoiRGVhbGVyIiwicm9sZSI6WyJEZWFsZXIiLCJWaWV3IEludm9pY2UiLCJTYXZlIFF1b3RlcyIsIkVkaXQgTWFya3VwIiwiVmlldyBSZW1pdHRhbmNlIiwiTWFuYWdlIEFDSCBJbmZvcm1hdGlvbiIsIkNhbmNlbCBDb250cmFjdCIsIlZvaWQgQ29udHJhY3RzIiwiVmlldyBSZXRhaWwgUHJpY2UgTGltaXRzIiwiRWRpdCBSZXRhaWwgUHJpY2UgTGltaXRzIiwiUGF5IFJlbWl0dGFuY2UiLCJFbnRlciBDb250cmFjdCIsIlByb2Nlc3MgUXVvdGVzIiwiU2FsZXMgQXNzb2NpYXRlcyIsIlZpZXcgTWFya3VwIl0sInNpZ25faW4iOiJtZmEiLCJuYmYiOjE2OTgwNTQ1MjYsImV4cCI6MTY5ODE0MDkyNiwiaWF0IjoxNjk4MDU0NTI2LCJpc3MiOiJodHRwczovL3pvb20tc3RhZ2UuYWxwaGF3YXJyYW50eS5jb20iLCJhdWQiOiJodHRwczovL3pvb20tc3RhZ2UuYWxwaGF3YXJyYW50eS5jb20ifQ._6DP-RHaxKa0PYP4DSIZLkJYYggfcHNGm68VMggWV9E";

      const apiUrl: string =
        "https://aw-test.free.beeceptor.com/api/v1/lead/save";

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
      };

      const apiFormData = {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        companyName: formData.companyName,
        selectedService: formData.selectedService,
        projectBudget: formData.projectBudget,
        requested_at: new Date().toISOString(),
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(apiFormData),
      });

      if (response.ok) {
        console.log("Response :", apiFormData);
        toast.success("Data submitted successful");
      } else {
        toast.error("API call failed");
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