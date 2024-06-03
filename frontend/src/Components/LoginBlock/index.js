import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Index.css";

function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") === "true" ? true : false,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    // Se isLoggedIn não estiver presente ou for falso, redirecione para a tela de login
    if (isLoggedIn || isLoggedIn === "true") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="Tabs">
      <button
        className="BotaoTab"
        id="Esquerda"
        onClick={() => setActiveTab("login")}
      >
        Login
      </button>
      <button
        className="BotaoTab"
        id="Direita"
        onClick={() => setActiveTab("register")}
      >
        Cadastrar
      </button>
      {activeTab === "login" && <LoginForm setIsLoggedIn={setIsLoggedIn} />}
      {activeTab === "register" && <RegisterForm />}
    </div>
  );
}

function LoginForm({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setError("Credenciais inválidas");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
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
