import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
