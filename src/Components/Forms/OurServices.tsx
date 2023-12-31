import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFormData } from "../../store/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import ServiceCard from "../ServiceCards/ServiceCard";
import devService from "../../Components/images/development.svg";
import webDesign from "../../Components/images/web-design.svg";
import marketing from "../../Components/images/marketing.svg";
import other from "../../Components/images/other.svg";
import "./style.css";

interface ServicesProps {
  setFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  isNext: boolean;
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const OurServices: React.FC<ServicesProps> = ({
  setFormValid,
  isNext,
  setIsNext,
  setStep,
}) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);

  const [selectedService, setSelectedService] = useState<string>(
    formData.selectedService
  );
  const [serviceError, setServiceError] = useState<string>("");

  useEffect(() => {
    if (isNext) {
      if (!selectedService) {
        setServiceError("Selecting a service is mandatory");
        setIsNext(false);
      } else {
        dispatch(setFormData({ ...formData, selectedService }));
        setFormValid(true);
        setStep(3);
        setIsNext(false);
      }
    }
  }, [isNext]);

useEffect(() => {
  document.querySelectorAll(".service-card").forEach((card) => {
    (card as HTMLDivElement).style.border = "none";
  });

  const selectedElement = document.getElementById(selectedService);
  if (selectedElement) {
    (selectedElement as HTMLDivElement).style.border = "1px solid blue";
  }
}, [selectedService]);

function selectionOperationHandler(data: string) {
  setSelectedService(data);

  document.querySelectorAll(".service-card").forEach((card) => {
    (card as HTMLDivElement).style.border = "none";
  });

  const selectedElement = document.getElementById(data);
  if (selectedElement) {
    (selectedElement as HTMLDivElement).style.border = "1px solid blue";
  }
}


  return (
    <div className="common">
      <h2>Our Services</h2>
      <p>Please select which service you are interested in.</p>
      <div className="card-container">
        <ServiceCard
          text="Development"
          imgPath={devService}
          onClick={() => selectionOperationHandler("Development")}
        />
        <ServiceCard
          text="Web Design"
          imgPath={webDesign}
          onClick={() => selectionOperationHandler("Web Design")}
        />
        <ServiceCard
          text="Marketing"
          imgPath={marketing}
          onClick={() => selectionOperationHandler("Marketing")}
        />
        <ServiceCard
          text="Other"
          imgPath={other}
          onClick={() => selectionOperationHandler("Other")}
        />
      </div>
      <div className="error-message" style={{ color: "red" }}>
        {serviceError}
      </div>
    </div>
  );
};

export default OurServices;
