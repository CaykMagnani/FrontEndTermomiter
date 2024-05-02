import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Home from "./Pages/Home";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
