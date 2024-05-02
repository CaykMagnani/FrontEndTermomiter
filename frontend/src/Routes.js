import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";

function RoutesApp() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <LoginPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesApp;
