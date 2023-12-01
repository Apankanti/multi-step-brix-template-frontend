import React, { useState } from "react";
import "./style.css";
import Button from "../Button";
interface FormState {
  name: string;
  email: string;
  number: string;
  company: string;
}

const ContactDetails: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    number: "",
    company: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="contact-contailer">
        <div className="form-head-text">
          <h3>Contact Details</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="input-grid">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="Your Number"
            />
          </label>

          <label>
            Company
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your Company"
            />
          </label>
        </div>
      </div>
      <div className="next-btn">
        <Button text="Next Step" />
      </div>
    </>
  );
};

export default ContactDetails;
