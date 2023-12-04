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

  const [selectedService, setSelectedService] = useState<string[]>(
    formData.selectedService.split(",")
  );
  const [serviceError, setServiceError] = useState<string>("");

  if (isNext) {
    if (selectedService.length > 0) {
      const arrToString = selectedService.join(",");
      dispatch(setFormData({ ...formData, selectedService: arrToString }));
      setFormValid(true);
      setStep(3);
      setIsNext(false);
    } else {
      setServiceError("Selecting at least one service is mandatory");
      setIsNext(false);
    }
  }

  useEffect(() => {
    selectedService.forEach((elem) => {
      const selectedElement = document.getElementById(elem);
      if (selectedElement) selectedElement.style.border = "1px solid blue";
    });
  }, [selectedService]);

  function selectionOperationHandler(data: string) {
    const selectedElement = document.getElementById(data);
    if (!selectedElement) {
      return;
    }
    if (selectedService.includes(data)) {
      const filteredArray = selectedService.filter((elem) => {
        return elem !== data;
      });
      setSelectedService(filteredArray);
      selectedElement.style.border = "none";
    } else {
      setSelectedService([...selectedService, data]);
      selectedElement.style.border = "1px solid blue";
    }
  }

  return (
    <div>
      <label>Our Services</label>
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
      <div className="error-message" style={{ color: 'red' }}>
        {serviceError}
      </div>
    </div>
  );
};

export default OurServices;
