import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types";
import user from "../../Components/images/user-128.svg";
import phone from "../../Components/images/phone-126.svg";
import emailIcon from "../../Components/images/message-16.svg";
import company from "../../Components/images/company.svg";
import { setFormData } from "../../store/actions";
import CommonInput from "../CommonInput/CommonInput";

interface ContactDetailsProps {
  setFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  isNext: boolean;
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  setFormValid,
  isNext,
  setIsNext,
  setStep,
}) => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);

  const [name, setName] = useState<string>(form.name);
  const [email, setEmail] = useState<string>(form.email);
  const [number, setNumber] = useState<string>(form.number);
  const [companyName, setCompanyName] = useState<string>(form.companyName);

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [numberError, setNumberError] = useState<string>("");
  const [companyNameError, setCompanyNameError] = useState<string>("");

  useEffect(() => {
    if (isNext) {
      const isNameValid = /^[a-zA-Z\s]+$/.test(name);
      const isEmailValid =
        email.trim().includes("@") && email.trim().includes(".");
      const isNumberValid =
        /^\d+$/.test(number) && number.length === 10 && number.length < 15;

      setNameError(isNameValid ? "" : "Please enter a valid name!");
      setEmailError(isEmailValid ? "" : "Email is not valid!");
      setNumberError(
        isNumberValid ? "" : "Ten digits phone number is required!"
      );
      setCompanyNameError(companyName ? "" : "Company name is required!");

      if (isNameValid && isEmailValid && isNumberValid && companyName) {
        dispatch(setFormData({ ...form, name, email, number, companyName }));
        setFormValid(true);
        setStep(2);
        setIsNext(false);
      } else {
        setIsNext(false);
      }
    }
  }, [isNext, name, email, number, companyName]);

  return (
    <div>
      <div className="contact-contailer">
        <div className="form-head-text">
          <h2>Contact Details</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className="input-grid">
          {[
            { label: "Name", input: name, type: "text", error: nameError },
            {
              label: "Phone Number",
              input: number,
              type: "number",
              error: numberError,
            },
          ].map((input) => (
            <div key={input.label}>
              <label htmlFor={input.label}>{input.label}</label>
              <CommonInput
                type={input.type}
                placeholder={`Your ${input.label}`}
                image={input.label === "Name" ? user : phone}
                onChange={(value: string) =>
                  input.label === "Name" ? setName(value) : setNumber(value)
                }
                value={input.label === "Name" ? name : number}
              />
              <div className="error-message">{input.error}</div>
            </div>
          ))}
        </div>
        <div className="input-grid">
          {[
            { label: "Email", input: email, type: "email", error: emailError },
            {
              label: "Company",
              input: companyName,
              type: "text",
              error: companyNameError,
            },
          ].map((input) => (
            <div key={input.label}>
              <label htmlFor={input.label}>{input.label}</label>
              <CommonInput
                type={input.type}
                placeholder={`${input.label} address`}
                image={input.label === "Email" ? emailIcon : company}
                onChange={(value: string) =>
                  input.label === "Email"
                    ? setEmail(value)
                    : setCompanyName(value)
                }
                value={input.label === "Email" ? email : companyName}
              />
              <div className="error-message" >
                {input.error}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
