import React, { useState, useEffect } from "react"; // Importe useEffect
import { useNavigate } from "react-router-dom";
import "./index.css";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Adicione o hook useEffect aqui
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    // Se isLoggedIn não estiver presente ou for falso, redirecione para a tela de login
    if (!isLoggedIn || isLoggedIn === "false") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="Home">
      <h1>Bem-vindo!</h1>
      <button onClick={() => sessionStorage.removeItem("isLoggedIn")}>
        Aqui
      </button>
    </div>
  );
}

export default Home;
