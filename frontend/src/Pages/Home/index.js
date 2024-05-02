import React, { useState, useEffect } from "react"; // Importe useEffect
import { useNavigate } from "react-router-dom";
import "./index.css";
import Header from "../../Components/Header";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn || isLoggedIn === "false") {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Header />
      <div className="Home">
        <h1>Bem-vindo!</h1>
        <button onClick={() => sessionStorage.removeItem("isLoggedIn")}>
          Aqui
        </button>
      </div>
    </>
  );
}

export default Home;
