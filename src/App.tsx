import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/pages/MainPage/MainPage";
import ShowDetails from "./Components/pages/ShowDetails";

function App() {
  const [step, setStep] = useState<number>(1);
  const [formValid, setFormValid] = useState<boolean>(false);
  const formData = useSelector((state: RootState) => state.form);
  const [isNext, setIsNext] = useState<boolean>(false);
  const nextStepHandler = () => {
    setIsNext(true);
  };

  return (
    
    <BrowserRouter>
      <Routes>
        
          <Route path="/home" element={<MainPage />} />
          <Route path="/show-details" element={<ShowDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
