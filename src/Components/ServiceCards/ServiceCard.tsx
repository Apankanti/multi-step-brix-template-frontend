import React from "react";
import "./style.css"; // Adjust the import based on your actual stylesheet location

interface ServiceCardProps {
  text: string;
  imgPath: string;
  onClick: (value: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  text,
  imgPath,
  onClick,
}) => {
  const handleCardClick = () => {
    onClick(text);
  };

  return (
    <div className="services">
      <div className="service-card" onClick={handleCardClick} id={text}>
        <img src={imgPath} alt="service-card-image" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
