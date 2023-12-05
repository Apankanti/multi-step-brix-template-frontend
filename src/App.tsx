import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ShowDetails from "./pages/ShowDetails";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/show-details" element={<ShowDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
