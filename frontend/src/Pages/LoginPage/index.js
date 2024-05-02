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
    sessionStorage.getItem("isLoggedIn") === "true" ? true : false,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    // Se isLoggedIn não estiver presente ou for falso, redirecione para a tela de login
    if (isLoggedIn || isLoggedIn === "true") {
      navigate("/");
    }

    setActiveTab("login");
    setCorBotaoDireito("#67558D");
    setCorBotaoEsquerdo("#9F84D9");
  }, [navigate]);

  const [CorBotaoDireito, setCorBotaoDireito] = useState("#9F84D9");
  const [CorBotaoEsquerdo, setCorBotaoEsquerdo] = useState("#9F84D9");

  const handleClickEsquerda = () => {
    setActiveTab("login");
    setCorBotaoDireito("#67558D");
    setCorBotaoEsquerdo("#9F84D9");
  };

  const handleClickDireita = () => {
    setActiveTab("register");
    setCorBotaoDireito("#9F84D9");
    setCorBotaoEsquerdo("#67558D");
  };

  return (
    <div className="Tabs">
      <button
        className="BotaoTab"
        id="Esquerda"
        style={{ backgroundColor: CorBotaoEsquerdo }}
        onClick={handleClickEsquerda}
      >
        Login
      </button>
      <button
        className="BotaoTab"
        id="Direita"
        style={{ backgroundColor: CorBotaoDireito }}
        onClick={handleClickDireita}
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

  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const toggleVisibilidadeSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmacaoSenha) {
      setError("As senhas não coincidem");
    } else {
      setError("");
    }
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
          <label className="Label">Digite seu nome</label>
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
              placeholder="Senha:"
              value={confirmacaoSenha}
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
        </div>
        <div className="Formulario">
          <button type="submit" className="BotaoLogin">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
