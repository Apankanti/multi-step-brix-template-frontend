import React from "react";
import Header from "./Components/Header";
import "./App.css";
import ContactDetails from "./Components/Forms/ContactDetails";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div className="text-container">
          {" "}
          <h2>Get a project quote</h2>
          <p>
            Please fill the form below to receive a quote for your project. Feel
            free to add as much detail as needed.
          </p>
        </div>

        <div className="form-container">
          <ContactDetails/>
        </div>
      </div>
    </div>
  );
}

export default App;
