import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import TemperatureHistory from "./Pages/TemperatureHistory";
import HumidityHistory from "./Pages/HumidityHistory";
import Home from "./Pages/Home";

function RoutesApp() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        {/* Adicione um redirecionamento para a rota do dashboard */}
        <Route
          path="/"
          element={<Navigate to="/dashboard" />}
        />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/TemperatureHistory" element={<TemperatureHistory />} />
        <Route path="/HumidityHistory" element={<HumidityHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
