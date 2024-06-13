import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageRegister from "../../Midias/ImageRegister.svg";
import ImageLogin from "../../Midias/ImageLogin.svg";
import Escondido from "../../Midias/Escondido.svg";
import Visivel from "../../Midias/Visivel.svg";
import "./Index.css";

function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") === "true",
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      setActiveTab("login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="Tabs">
      <button
        className="BotaoTab"
        id="Esquerda"
        onClick={() => setActiveTab("login")}
        style={{
          backgroundColor: activeTab === "login" ? "#f6f2e9" : "#b48a40",
        }}
      >
        Login
      </button>
      <button
        className="BotaoTab"
        id="Direita"
        onClick={() => setActiveTab("register")}
        style={{
          backgroundColor: activeTab === "register" ? "#f6f2e9" : "#b48a40",
        }}
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem("accessToken", data.accessToken);
        sessionStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        navigate("/dashboard");
      } else {
        setError(data.message || "Credenciais inválidas");
      }
    } catch (error) {
      setError("Erro de rede. Tente novamente.");
    }
  };

  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const toggleVisibilidadeSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  return (
    <div>
      <img src={ImageLogin} alt="Imagem de Login" className="ImageLoginPage" />
      <form onSubmit={handleSubmit}>
        <div className="Formulario">
          <label className="Label">Digite seu E-mail:</label>
          <input
            className="input"
            type="text"
            placeholder="Email:"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="Formulario">
          <label className="Label">Digite sua senha:</label>
          <div style={{ position: "relative" }}>
            <input
              className="input"
              type={senhaVisivel ? "text" : "password"}
              placeholder="Senha:"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={senhaVisivel ? Visivel : Escondido}
              alt={senhaVisivel ? "Visível" : "Escondido"}
              onClick={toggleVisibilidadeSenha}
              style={{
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                marginLeft: "0",
              }}
            />
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="Formulario">
          <button type="submit" className="BotaoLogin">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmacaoSenha) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registro bem-sucedido! Você pode fazer login agora.");
        setError("");
      } else {
        setError(data.message || "Erro ao registrar");
      }
    } catch (error) {
      setError("Erro de rede. Tente novamente.");
    }
  };

  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const toggleVisibilidadeSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  return (
    <div>
      <img
        src={ImageRegister}
        alt="Imagem de Registro"
        className="ImageLoginPage"
      />
      <form onSubmit={handleSubmit}>
        <div className="Formulario">
          <label className="Label">Digite seu nome:</label>
          <input
            className="input"
            type="text"
            placeholder="Nome:"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="Formulario">
          <label className="Label">Digite seu E-mail:</label>
          <input
            className="input"
            type="email"
            placeholder="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="Formulario">
          <label className="Label">Digite sua senha:</label>
          <div style={{ position: "relative" }}>
            <input
              className="input"
              type={senhaVisivel ? "text" : "password"}
              placeholder="Senha:"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={senhaVisivel ? Visivel : Escondido}
              alt={senhaVisivel ? "Visível" : "Escondido"}
              onClick={toggleVisibilidadeSenha}
              style={{
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                marginLeft: "0",
              }}
            />
          </div>
        </div>
        <div className="Formulario">
          <label className="Label">Confirme sua senha:</label>
          <div style={{ position: "relative" }}>
            <input
              className="input"
              type={senhaVisivel ? "text" : "password"}
              placeholder="Confirme a senha:"
              value={confirmacaoSenha}
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
        </div>
        <div className="Formulario">
          <button type="submit" className="BotaoLogin">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
