import React, { useState } from "react";
import './Index.css';

function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="Tabs">
      <button className="BotaoTab" id="Esquerda" onClick={() => setActiveTab("login")}>Login</button>
      <button className="BotaoTab" id="Direita" onClick={() => setActiveTab("register")}>Cadastrar</button>

      {activeTab === "login" && <LoginForm />}
      {activeTab === "register" && <RegisterForm />}
    </div>
  );
}

function LoginForm() {
  return (
    //const DivDireita = document.getElementById("Direita");
    <div>
      <h2>Login</h2>
      {/* Adicione os campos e lógica de login aqui */}
    </div>
  );
}

function RegisterForm() {
  return (
    //const DivDireita = document.getElementById("Direita");
    <div>
      <h2>Cadastrar Login</h2>
      {/* Adicione os campos e lógica de cadastro aqui */}
    </div>
  );
}

export default LoginPage;
