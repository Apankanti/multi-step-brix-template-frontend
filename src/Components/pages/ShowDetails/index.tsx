// ShowDetails.js
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
import { RootState } from "../../../store/types";
import "./style.css"; // Import the stylesheet

const ShowDetails = () => {
  const history = useNavigate();

  // Retrieve data from Redux store
  const formData = useSelector((state: RootState) => state.form);

  useEffect(() => {
    // Check if there is no data in formData
    if (!formData || !formData.name) {
      // Redirect to the homepage
      history("/");
    }
  }, [formData, history]);

  // Remove the leading comma from selected services
  const selectedServices = formData.selectedService
    .replace(/^,/, "")
    .split(",");

  return (
    <div className="Main-showDetails">
      <Header />
      <div className="showDetails">
        <h2>Contact Details</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone Number: {formData.number}</p>
        <p>Company Name: {formData.companyName}</p>

        {selectedServices.length > 0 && (
          <>
            <h2>Service Details</h2>
            <p>
              Selected Service:{" "}
              {selectedServices.map((service, index) => (
                <span key={index}>
                  {index !== 0 && ", "}{" "}
                  {/* Add a comma for all elements except the first */}
                  {service.trim()} {/* Trim leading/trailing spaces */}
                </span>
              ))}
            </p>
          </>
        )}

        <h2>Price Details</h2>
        <p>Project Budget: {formData.projectBudget}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ShowDetails;
