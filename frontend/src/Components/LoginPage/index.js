import React, { useState } from "react";

function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div>
      <button onClick={() => setActiveTab("login")}>Login</button>
      <button onClick={() => setActiveTab("register")}>Cadastrar</button>

      {activeTab === "login" && <LoginForm />}
      {activeTab === "register" && <RegisterForm />}
    </div>
  );
}

function LoginForm() {
  return (
    <div>
      <h2>Login</h2>
      {/* Adicione os campos e lógica de login aqui */}
    </div>
  );
}

function RegisterForm() {
  return (
    <div>
      <h2>Cadastrar Login</h2>
      {/* Adicione os campos e lógica de cadastro aqui */}
    </div>
  );
}

export default LoginPage;
